import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class Comments extends React.Component {
  render() {
    return (
      <View style={{
          flex: 1,
          borderColor: '#ff0000',
          borderWidth: 2,
          width: '100%',
          padding:10,
          marginBottom: 10}}>
        <TextInput
            placeholder='Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Non, qui numquam eum ratione fugit minus aliquam repudiandae. Omnis
            nemo officiis animi consectetur perspiciatis consequatur alias ducimus!
             Rem beatae, assumenda eaque debitis impedit necessitatibus quas minima
              non natus adipisci magni ipsa officia neque deleniti, saepe ipsam aut.
               Doloribus nobis omnis iure, fugit labore, ipsum incidunt dolor neque
                quae! Perspiciatis quisquam hic at magni delectus suscipit sunt
                consequatur quia labore officia dolores distinctio cupiditate culpa
                necessitatibus reiciendis rerum consectetur, tenetur doloremque
                iure, nulla dicta debitis. Dolore sapiente animi, a. Laborum voluptates
                 nihil dolores. Nesciunt provident, nostrum maxime optio cupiditate expedita at ipsa!'
            multiline={true}
            numberOfLines = {6}
            style={{textAlignVertical: "top"}}
        />
      </View>
    );
  }
}

export default Comments;
