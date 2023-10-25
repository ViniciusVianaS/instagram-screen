import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  TouchableOpacity,
  Platform
} from 'react-native';
import {useState} from 'react';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function App() {
  const [input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true);

  return (
    <View style={styles.container}>
      <Image source={require('./src/assets/logo.png')} style={styles.logo}/>
      <TextInput placeholder='Celular, usuário ou email' style={styles.input}/>

      <View style={styles.inputArea}>
        <TextInput placeholder="insira sua senha" style={styles.inputPassword} value={input} onChangeText={(texto) => setInput(texto)} secureTextEntry={hidePass}/>
        <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>
          <Ionicons name="eye" color="#000" size={25} />
        </TouchableOpacity>
      </View>

      <View style={styles.forgotContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Acessar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookContainer}>
        <FontAwesome5 name='facebook' size={25} color='#399fff'/>
        <Text style={styles.facebookText}>Continue com usuário</Text>
      </TouchableOpacity>
      <View style={styles.divisor}>
        <View style={styles.divisorLine}></View>
        <Text style={{marginHorizontal: '3%'}}>OU</Text>
        <View style={styles.divisorLine}></View>
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Não possui uma conta?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpButton}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: Platform.OS === 'android' ? '13%' : '20%',
    marginBottom: Platform.OS === 'android' ? '13%' : '15%',
    width: 180,
    height: 50,
  },
  input: {
    width: '90%',
    height: 42,
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'e0e0e0',
  },
  inputArea: {
    flexDirection: 'row',
    width: '90%',
    borderRadius: 5,
    height: 42,
    alignItems: 'center',
    marginBottom: 20,
    padding: 8,
    borderWidth: 1,
  },
  inputPassword: {
    width: '90%',
    height: 42,
  },
  icon: {
    width: '15%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotContainer: {
    width: '90%',
    alignItems: 'flex-end'
  },
  forgotText: {
    color: '#399fff',
  },
  loginButton: {
    marginTop: '5%',
    backgroundColor: '#399fff',
    width: '90%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  loginText: {
    color: '#fff',
    fontSize: 17,
  },
  facebookContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '15%'
  },
  facebookText: {
    color: '#399fff',
    paddingLeft: 8,
    fontSize: 15,
  },
  divisor: {
    marginTop: '10%',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divisorLine: {
    width: '45%',
    height: 2,
    backgroundColor: '#efeded',
    borderRadius: 5,
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: '10%'
  },
  signUpText: {
    color: '#c4c4c4',
    paddingRight: 5
  },
  signUpButton: {
    color: '#399fff',
    fontWeight: 'bold'
  }
});
