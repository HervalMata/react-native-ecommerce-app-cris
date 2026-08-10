import {Image} from 'expo-image';
import { Platform, StyleSheet} from "react-native";

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";

export default function HomeScreen() {
    return (
        <ParallaxScrollView
            headerImage={<Image source={require('@/assets/images/partial-react-logo.png')} style={styles.logo} /> }
            headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Bemvindo à Cris Laços</ThemedText>
                <HelloWave />
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">1º Passo Nos Teste!
                Editar <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> para ver as mudanças.
                Pressione{' '}
                <ThemedText type="defaultSemiBold">
                    {Platform.select({
                        ios: 'cmd + d',
                        android: 'cmd + m',
                        web: 'F12',
                    })}
                </ThemedText>{' '}
                    para abrir ferramentas de desenvolvedor.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <Link href="/modal">
                    <Link.Trigger>
                        <ThemedText type="subtitle">Passo 2: Explore</ThemedText>
                    </Link.Trigger>
                    <Link.Preview />
                    <Link.Menu>
                        <Link.MenuAction title="Ação" icon="cube" onPress={() => alert('Ação Pressionada')} />
                        <Link.MenuAction title="Trocar" icon="square.and.arrow.up" onPress={() => alert('Trocar Pressionada')} />
                        <Link.Menu title="Mais" icon="ellipis">
                            <Link.MenuAction title="Remover" icon="trash" destructive onPress={() => alert('Remover pressionado')} />
                        </Link.Menu>
                    </Link.Menu>
                </Link>
                <ThemedText>
                    {`Toque em Explore tab para saber mais sobre o que está incluido neste starter app.`}
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">
                    Passo 3: Tenha um ótimo começo
                </ThemedText>
                <ThemedText>
                    {`Quando você estiver pronto, corra `}
                    <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> para ter uma rápida{' '}
                    <ThemedText type="defaultSemiBold">app</ThemedText> diretório. Este será movido para{' '}
                    <ThemedText type="defaultSemiBold">app</ThemedText> para{' '}
                    <ThemedText type="defaultSemiBold">app-exemplo</ThemedText>.
                </ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
})

