# Siri PC Power Controls

A simple project that lets you restart or shutdown your Windows PC using Siri and an iPhone shortcut over your local Wi-Fi network.

---

## Part 1: Setting up your Windows PC

### Step 1: Install Node.js
1. Go to the official [Node.js website](https://nodejs.org/).
2. Download and install the **LTS (Long Term Support)** version.
3. Follow the installation steps on your screen, leaving everything on default settings.

### Step 2: Download the Project Files
1. Download this repository as a ZIP file (click the green **Code** button at the top of the page, then **Download ZIP**).
2. Extract (unzip) the folder anywhere on your computer (for example, on your Desktop).

### Step 3: Install the Server and Background Service
1. Open the folder where you extracted the project.
2. In the folder path bar at the top, type `cmd` and press **Enter** (this opens Command Prompt inside that folder).
3. Type the following command to install the required framework and press Enter:
   
   npm install express


4. Next, we will install **PM2** so the server runs automatically in the background even when you restart your PC:

npm install -g pm2
npm install -g pm2-windows-startup
pm2-startup install
*(Note: If it gives you an administrative prompt or command to copy and paste, run it in a Command Prompt opened as Administrator).

5. Finally, start your server and save the process:

pm2 start server.js --name "pc-power-controls"
pm2 save

### Step 4: Find Your PC's Local IP Address

1. Open Command Prompt and type:

ipconfig


2. Look for **IPv4 Address** under your active Wi-Fi or Ethernet adapter (it usually looks like `192.168.1.X` or `172.X.X.X`). Copy this number down!



## Part 2: Setting up the iPhone Shortcut (Step-by-Step for Absolute Beginners)

### Step 1: Create the "Restart PC" Shortcut

1. Open the **Shortcuts** app on your iPhone.
2. Tap the **`+`** icon in the top right corner to create a new shortcut.
3. Tap **Add Action** at the bottom.
4. In the search bar at the top, type **"Get Contents of URL"** and select that action.
5. You will see a blue text box that says `URL`. Tap it and type your computer's IP address followed by `:3000/restart`.
* *Example:* `http://192.168.1.50:3000/restart`


6. Tap the arrow icon (or expansion arrow) next to the URL block to show extra options:
* Change **Method** from `GET` to **`POST`**.


7. Tap the shortcut name at the very top (near the middle of the screen), tap **Rename**, and change it to **"Restart PC"**.
8. Tap **Done** in the top right corner.

### Step 2: Create the "Shutdown PC" Shortcut

1. Repeat the exact same steps above to create another new shortcut.
2. For the URL, use your IP address with `/shutdown` at the end:
* *Example:* `http://192.168.1.50:3000/shutdown`


3. Set the **Method** to **`POST`**.
4. Rename this shortcut to **"Shutdown PC"** and save it.

### Step 3: How to Use It with Siri

1. Make sure your iPhone and your Windows PC are connected to the **same Wi-Fi network**.
2. Simply say to your phone: **"Hey Siri, Restart PC"** or **"Hey Siri, Shutdown PC"**.
3. Siri will run the shortcut, send a signal to your computer over the local network, and execute the command!

---

## 🚧 Status & Future Updates

* **Working**: Remote Restart and Remote Shutdown via local network requests.
* **In Development**: Remote Unlock feature (currently being researched to safely bypass Windows Session 0 security isolation without removing your Windows PIN/password). Stay tuned!


