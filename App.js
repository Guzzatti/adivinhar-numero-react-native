import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import AssetExample from './components/AssetExample';


// Isso é um comentário (//)
// Esse método sempre vai ser executado quando o botao for pressionado
function botaoFoiPressionado(textoDigitado){

  // O valor digitado no campo de texto estará na variável 'textoDigitado'

  const numeroGerado = Math.floor(Math.random(10)*10);
  if (numeroGerado == textoDigitado){
    alert('você acertou!')
  }
  else{
    alert(`Você errou. O número é ${numeroGerado}`);
  }
}



// Nao precisa se preocupar muito com essa parte daqui pra baixo agora
export default function App() {
  const [text, setText] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={{margin: 10}}>
        <TextInput
          label="Digite o valor"
          value={text}
          onChangeText={(text) => setText(text)}
        />

        <Button
          mode="contained"
          onPress={() => botaoFoiPressionado(text)}
          style={{ marginTop: 10 }}>
          VERIFICAR
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
