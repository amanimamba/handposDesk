# 🤚 HandKey — Gesture Keyboard Controller

Contrôlez votre clavier avec des gestes de la main via la webcam.  
Utilise **Electron**, **ml5.js** (HandPose), et **p5.js**.

---

## 📦 Installation & Lancement

### 1. Prérequis
- **Node.js** v18+ → https://nodejs.org
- **Python** (requis par `robotjs` pour la compilation native)
- **Webcam** fonctionnelle

### 2. Créer le projet

```bash
# Cloner / créer le dossier
mkdir handpose-keyboard
cd handpose-keyboard

# Copier les fichiers du projet dans ce dossier
# (package.json, src/main.js, src/index.html)
```

### 3. Installer les dépendances

```bash
npm install
```

> ⚠️ `robotjs` nécessite des outils de compilation natifs.

**Sur Windows** (dans PowerShell admin) :
```bash
npm install --global windows-build-tools
npm install
```

**Sur macOS** :
```bash
xcode-select --install
npm install
```

**Sur Linux** (Ubuntu/Debian) :
```bash
sudo apt-get install -y build-essential libxtst-dev libpng++-dev
npm install
```

### 4. Lancer l'application

```bash
npm start
```

**Mode développeur** (avec DevTools) :
```bash
npm run dev
```

---

## 🤚 Les 10 Gestes Reconnus

| # | Geste | Emoji | Touche par défaut |
|---|-------|-------|-------------------|
| 1 | Index pointé | ☝️ | `Space` |
| 2 | Deux doigts (V) | ✌️ | `Enter` |
| 3 | Pouce + Petit doigt | 🤟 | `Tab` |
| 4 | OK (cercle) | 👌 | `Backspace` |
| 5 | Téléphone | 🤙 | `Escape` |
| 6 | Main ouverte (5 doigts) | 🖐️ | `Ctrl+C` |
| 7 | Poing fermé | ✊ | `Ctrl+V` |
| 8 | Pouce levé | 👍 | `Ctrl+Z` |
| 9 | Cornes du diable | 🤘 | `;` |
| 10 | Doigts croisés | 🤞 | `:` |

---

## ⚙️ Personnalisation

Dans l'onglet **🤚 Gestes**, cliquez sur ✏️ à côté de n'importe quel geste pour :
- Changer la touche déclenchée
- Ajouter des modificateurs (`Ctrl`, `Shift`, `Alt`)

---

## 🔧 Structure du projet

```
handpose-keyboard/
├── package.json
└── src/
    ├── main.js       ← Process principal Electron
    └── index.html    ← Interface + p5.js + ml5.js
```

---

## 💡 Conseils d'utilisation

- Placez votre main à **30–50 cm** de la caméra
- Fond **bien éclairé**, évitez les contre-jours
- Ajustez le **seuil de confiance** dans Réglages si trop de faux positifs
- Augmentez le **délai entre gestes** si les touches se déclenchent trop souvent
"# handposDesk" 
