import React, {useState} from "react";
import { View, Text, Pressable } from "react-native";
import styles from "../styles/Placar"

export default function Placar(props){

    const [pontuacao, definerPontuacao] = useState(0)


    return <View style={styles.placar}>
        <Text style={styles.placarTitulo}> {props.titulo} </Text>
        <Text style={styles.placarPontuacao}> {pontuacao} </Text>

        <View style={styles.placarCampo}> 
            <Pressable onPress={() => definerPontuacao(pontuacao + 1)} >
                <Text style={styles.placarBotao}> + </Text>
            </Pressable>

            <Pressable onPress={() => definerPontuacao(pontuacao - 1)}>
                <Text style={styles.placarBotao}> - </Text>
            </Pressable>
        </View>
    </View>
}