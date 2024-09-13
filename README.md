<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">  
</head>
<body>

  <h1>react-native-animated-typing-text</h1>
  <p>A React Native component that simulates typing text with an animated gradient background.</p>

  <h2>Installation</h2>
  <p>To install the package, use npm or yarn:</p>

  <h3>Using npm:</h3>
  <pre><code>npm install react-native-animated-typing-text</code></pre>

  <h3>Using yarn:</h3>
  <pre><code>yarn add react-native-animated-typing-text</code></pre>

  <h2>Usage</h2>
  <p>To use the <code>TypingText</code> component in your React Native project, follow these steps:</p>

  <h3>Import the Component</h3>
  <pre><code>import TypingText from 'react-native-animated-typing-text';</code></pre>

  <h3>Example</h3>
  <p>Here's a basic example of how to use the <code>TypingText</code> component:</p>

  <pre><code>
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TypingText from 'react-native-animated-typing-text';

const App = () => {
  return (
    &lt;View style={styles.container}&gt;
      &lt;TypingText
        text="Welcome to the World Of Heaven!"
        typingSpeed={60}
        gradientColors={['#ff9a9e', '#fad0c4']}
        textStyle={{ color: '#fff', fontSize: 28 }}
        animationDuration={300}
      /&gt;
    &lt;/View&gt;
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});

export default App;
  </code></pre>

  <h2>Demo</h2>
  <p>Check out the demo of the component in action:</p>
  <img src="./src/assets/demo.gif" alt="Demo GIF" style="width: 300px; height: auto;">

  <h2>Props</h2>
  <table>
    <thead>
      <tr>
        <th>Prop</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>text</code></td>
        <td><code>string</code></td>
        <td><code>""</code></td>
        <td>The text to display with typing effect.</td>
      </tr>
      <tr>
        <td><code>typingSpeed</code></td>
        <td><code>number</code></td>
        <td><code>60</code></td>
        <td>Speed of typing effect in milliseconds.</td>
      </tr>
      <tr>
        <td><code>gradientColors</code></td>
        <td><code>array of string</code></td>
        <td><code>['#ff9a9e', '#fad0c4']</code></td>
        <td>Array of colors for the gradient background.</td>
      </tr>
      <tr>
        <td><code>textStyle</code></td>
        <td><code>object</code></td>
        <td><code>{}</code></td>
        <td>Custom style for the text.</td>
      </tr>
      <tr>
        <td><code>animationDuration</code></td>
        <td><code>number</code></td>
        <td><code>300</code></td>
        <td>Duration of the animation in milliseconds.</td>
      </tr>
      <tr>
        <td><code>gradientStyle</code></td>
        <td><code>object</code></td>
        <td><code>{}</code></td>
        <td>Custom style for the gradient background.</td>
      </tr>
      <tr>
        <td><code>containerStyle</code></td>
        <td><code>object</code></td>
        <td><code>{}</code></td>
        <td>Custom style for the container view.</td>
      </tr>
    </tbody>
  </table>

  <h2>License</h2>
  <p>This project is licensed under the ISC License.</p>

  <h2>Contact</h2>
  <p>If you have any questions or issues, please open an issue on the <a href="https://github.com/mehuljetani/react-native-animated-typing-text/issues">GitHub repository</a> or contact the author directly.</p>

</body>
</html>
