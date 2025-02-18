# 🧠 **Memory Game**  

## 🎯 **Project Overview**

This is a **fun and interactive memory card game** where players match pairs of emoji cards. The game supports **multiple players** in local mode and provides a **customizable experience** with different emoji categories.  

## 🚀 **Features**

✅ **Single-player & Multiplayer modes** (up to 4 players)  
✅ **Customizable settings** (choose emoji categories & number of pairs)  
✅ **Randomized card placement** for unique gameplay each time  
✅ **Accessibility support** with screen reader-friendly elements  
✅ **Smooth animations & user-friendly interface**  

## 📂 **Project Structure**

``` plaintext
MemoryGame/  
│── components/                # React components  
│   ├── AssistiveTechInfo.jsx  # Accessibility info  
│   ├── AssistiveTechInfo2.jsx # Multiplayer info  
│   ├── EmojiButton.jsx        # Emoji card button logic  
│   ├── ErrorCard.jsx          # Error handling component  
│   ├── Form.jsx               # Game setup form  
│   ├── GameOver.jsx           # Game over screen  
│   ├── MemoryCard.jsx         # Memory card game logic  
│   ├── Option.jsx             # Select options for form  
│   ├── RegularButton.jsx      # Custom button component  
│   ├── Select.jsx             # Dropdown select menu  
│── data/                      # Game data (emoji categories, settings)  
│   ├── data.js   
├── App.jsx                    # Main game logic  
├── index.css                  # Global styles  
├── index.html                 # Main HTML file  
├── index.jsx                  # React entry point  
├── package.json               # Project dependencies  
├── package-lock.json          # Lockfile for package versions  
│── README.md                  # Documentation
```

## ⚙️ **Installation & Setup**

1️⃣ **Clone the repository:**  

```bash
git clone https://github.com/Heller-Theo/memory-game-js.git
cd memory-game-js
```

2️⃣ **Install dependencies:**  

```bash
npm install
```

3️⃣ **Run the game locally:**  

```bash
npm run dev
```

4️⃣ **Open in browser:**  
By default, the game runs on **`http://localhost:5173`**.  

## 🎮 **How to Play**

1. Select an **emoji category** and the **number of card pairs**.
2. Click **Start Game** to begin.  
3. Click on a card to **flip** it.  
4. Match two identical cards to score a point.  
5. The player with the most matches wins (multiplayer mode).  

## 🔧 **Customization**

You can modify the **`data/data.js`** file to add new emoji categories or adjust settings.  

## 👨‍💻 **Technologies Used**

- **React** (frontend)  
- **Vite** (development server)  
- **CSS** (styling)
