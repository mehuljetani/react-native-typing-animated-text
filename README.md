<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO Optimization -->
  <meta name="description" content="React Native animated typing text component with gradient backgrounds. Easy to install and use with customizable properties.">
  <meta name="keywords" content="React Native, Typing Text, Animation, Gradient, npm, JavaScript, Mobile Development">
  <meta name="author" content="Mehul Jetani">
  
  <!-- Social Media Open Graph (OG) Tags -->
  <meta property="og:title" content="react-native-typing-animated-text" />
  <meta property="og:description" content="A React Native component that simulates typing text with an animated gradient background." />
  <meta property="og:url" content="https://github.com/mehuljetani/react-native-typing-animated-text" />

  <!-- Twitter Card Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="react-native-typing-animated-text" />
  <meta name="twitter:description" content="React Native animated typing text component with customizable gradient backgrounds." />
  
  

  <!-- Google Analytics -->
  
</head>
<body>

  <h1>react-native-typing-animated-text</h1>
  <p>A React Native component that simulates typing text with an animated gradient background.</p>

  <!-- GitHub Badge -->
  <a href="https://github.com/mehuljetani/react-native-typing-animated-text">
    <img src="https://img.shields.io/github/stars/mehuljetani/react-native-typing-animated-text?style=social" alt="GitHub Stars">
  </a>

  <h2>Installation</h2>
  <p>To install the package, use npm or yarn:</p>

  <h3>Using npm:</h3>
  <pre><code>npm install react-native-typing-animated-text</code></pre>

  <h3>Using yarn:</h3>
  <pre><code>yarn add react-native-typing-animated-text</code></pre>

  <h2>Usage</h2>
  <p>To use the <code>TypingText</code> component in your React Native project, follow these steps:</p>

  <h3>Import the Component</h3>
  <pre><code>import TypingText from 'react-native-typing-animated-text';</code></pre>

  <h3>Example</h3>
  <p>Here's a basic example of how to use the <code>TypingText</code> component:</p>

  <pre><code>
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TypingText from 'react-native-typing-animated-text';

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

  <!-- Demo Section with Live Demo and GIF -->
  <h2 class="demo-section">Demo</h2>
  <p>Check out the demo of the component in action:</p>
  <img src="https://miro.medium.com/v2/resize:fit:438/format:webp/1*rEKhCdFKhcI7mhUdfot6QQ.gif" alt="Demo GIF" loading="lazy" >
  <br>

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
  <p>If you have any questions or issues, please open an issue on the <a href="https://github.com/mehuljetani/react-native-typing-animated-text/issues">GitHub repository</a> or contact the author directly.</p>

  

</body>
</html>
