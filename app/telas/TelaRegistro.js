import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Botao from "../components/Botao";
import Input from "../components/Input";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { db } from "../../firebaseConfig";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export default function TelaRegistro({navigation}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  
  
  async function cadastrarUsuario() {

    if(senha === confirmarSenha){
      try {
        // Inserir usuario para autenticação
        await createUserWithEmailAndPassword(auth, email, senha);

        // Inserir usuário no banco de dados/ id personalizado
        // await setDoc(doc(db, 'usuario', email), {
        //   nome: nome,
        //   email: email,
        // });

        // Inserir usuario no banco de dados id automático
        await addDoc(collection(db, 'usuario'),{
          nome: nome,
          email: email,
        });

        alert("Usuario cadastrado com sucesso!");
        navigation.navigate('TelaLogin')
      } catch (error) {
        alert("Erro ao Cadastrar usuario!");
      }
    } else {
      alert("Senha diferente");
    }

  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro</Text>
      <Input placeholder="Nome" value={nome} onChangeText={setNome} />
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input placeholder="Senha"secureTextEntry value={senha} onChangeText={setSenha}/>
      <Input placeholder="Confirmar Senha" secureTextEntry value={confirmarSenha} onChangeText={setConfirmarSenha} />
      <Botao titulo="Criar Conta" onPress={cadastrarUsuario} />

      <TouchableOpacity onPress={() => navigation.navigate("TelaLogin")}>
        <Text style={styles.link}>Já tem conta? Faça login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    color: "#9c88ff",
  },
  link: {
    color: "#9c88ff",
    textAlign: "center",
    marginTop: 15,
  },
};