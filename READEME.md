# React Native BuildStrap

React Native BuildStrap é uma biblioteca para facilitar a criação de interfaces reutilizáveis e responsivas em React Native, com suporte a temas dinâmicos (claro e escuro) e estilos utilitários.

## Instalação

Para instalar a biblioteca, execute o seguinte comando:

```bash
npm install react-native-buildstrap
```

Ou, se estiver usando Yarn:

```bash
yarn add react-native-buildstrap
```

## Configuração Inicial

Envolva seu aplicativo com o componente `Buildstrap` para habilitar o suporte a temas. Você pode passar temas personalizados como propriedades.

```javascript
import React from "react";
import { Buildstrap } from "react-native-buildstrap";

const App = () => {
  return (
    <Buildstrap>
      {/* Seu aplicativo */}
    </Buildstrap>
  );
};

export default App;
```

### Propriedades do `Buildstrap`

- **customThemes**: Permite passar temas personalizados. Deve conter as propriedades `dark` e `light`.

Exemplo:

```javascript
<Buildstrap
  customThemes={{
    dark: { background: "#000", text: "#fff" },
    light: { background: "#fff", text: "#000" },
  }}
>
  {/* Seu aplicativo */}
</Buildstrap>
```

## Uso do Tema

Use o hook `useTheme` para acessar o tema atual e alternar entre os temas claro e escuro.

```javascript
import { useTheme } from "react-native-buildstrap";

const MyComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={{ backgroundColor: theme.background, flex: 1 }}>
      <Text style={{ color: theme.text }}>Olá Mundo</Text>
      <Button title="Alternar Tema" onPress={toggleTheme} />
    </View>
  );
};
```

## Criação de Estilos

Use a função `createStyles` para criar estilos dinâmicos baseados no tema.

```javascript
import { createStyles } from "react-native-buildstrap/hook/CreateStyles";

const styles = createStyles({
  customButton: {
    padding: 10,
    borderRadius: 5,
  },
});
```

Exemplo de uso:

```javascript
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "react-native-buildstrap";
import { createStyles } from "react-native-buildstrap/hook/CreateStyles";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const styles = createStyles({
    customButton: {
      backgroundColor: theme.primary,
    },
  });

  return (
    <View style={[styles.container, styles.bgToggle]}>
      <Text style={styles.textToggle}>Bem-vindo ao BuildStrap</Text>
      <TouchableOpacity style={styles.customButton} onPress={toggleTheme}>
        <Text style={styles.textLight}>Alternar Tema</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
```

## Estilos Utilitários

A biblioteca fornece uma ampla gama de estilos utilitários prontos para uso, como:

- **Espaçamento**: `p1`, `m2`, `pt3`, `mx4`, etc.
- **Cores de texto**: `textPrimary`, `textDanger`, `textMuted`, etc.
- **Cores de fundo**: `bgPrimary`, `bgSuccess`, `bgDark`, etc.
- **Flexbox**: `flexRow`, `justifyContentCenter`, `alignItemsEnd`, etc.
- **Tamanhos de fonte**: `fs1`, `fs2`, `fs3`, etc.
- **Bordas**: `rounded`, `roundedCircle`, `shadow`, etc.

Exemplo:

```javascript
<View style={[styles.bgPrimary, styles.p3]}>
  <Text style={styles.textLight}>Texto com fundo primário</Text>
</View>
```

## Contribuindo

Contribuições são bem-vindas! Para contribuir, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma nova branch: `git checkout -b minha-branch`.
3. Faça suas alterações e commit: `git commit -m 'Minha contribuição'`.
4. Envie suas alterações: `git push origin minha-branch`.
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
