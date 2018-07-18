import React from 'react';
import {
  Picker, StyleSheet, TextInput, View,
} from 'react-native';

class CompanyPicker extends React.Component {
  componentDidMount() {
    this.props.fetchCompanies()
  }

  handleChange(newCompany) {
    // If the user has deleted their selection, exit
    if (newCompany === null) { return; }

    const inputCompany = {
      label: newCompany.toUpperCase(),
      value: newCompany.toUpperCase(),
    };
    this.props.addCompany(inputCompany.value)
    // Double check the user-submitted company is not in the list,
    // then add it to the database
    const pos = Object.values(this.props.companies)
      .map((company) => company.value)
      .indexOf(inputCompany.value);

    if (pos < 0) {
      const company = { value: inputCompany.value, label: inputCompany.value };
      this.props.addToDataBase(company);
    }
  }

  compare(a, b) {
    if (a.value < b.value) { return -1 }
    if (a.value > b.value) { return 1 }
    return 0;
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 2,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        width: '100%',
      },
    });

    const options = Object.values(this.props.companies).sort(this.compare)
      .map((company, i) =>
        <Picker.Item key={i} label={company.label} value={company.value}/>
      );

    return (
      <View style={{flexDirection: 'row'}}>
        <Picker
          style={{ flex: 1 }}
          prompt='Select a company'
          onValueChange={(selectedOption) =>
            this.props.addCompany(selectedOption.toUpperCase())}
          selectedValue={this.props.company}>
          {options}
        </Picker>
        <TextInput
          style={styles.container}
          placeholder='(Optional) Add unlisted company'
          onSubmitEditing={(newCompany) => this.handleChange(newCompany.nativeEvent.text)}
        />
      </View>
    );
  }
}

export default CompanyPicker;
