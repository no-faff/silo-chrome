# Open with Silo (Chrome)

A Chrome/Chromium extension that adds "Open with Silo" to the right-click context menu on any link. Sends the URL to [Silo](https://github.com/no-faff/Silo), a browser picker for Linux, so you can choose which browser or profile to open it in.

Works with Chrome, Brave, Vivaldi, Edge and any Chromium-based browser.

## Requirements

- A Chromium-based browser
- [Silo](https://github.com/no-faff/Silo) installed
- Python 3

## Install

### 1. Install the native messaging host

Copy the host script:

```bash
sudo mkdir -p /usr/lib/silo
sudo cp native-host/silo-host.py /usr/lib/silo/
sudo chmod +x /usr/lib/silo/silo-host.py
```

Register it with Chrome/Chromium:

```bash
mkdir -p ~/.config/google-chrome/NativeMessagingHosts
cp native-host/com.nofaff.silo.json ~/.config/google-chrome/NativeMessagingHosts/
```

For other Chromium browsers, the path varies:

- **Brave:** `~/.config/BraveSoftware/Brave-Browser/NativeMessagingHosts/`
- **Vivaldi:** `~/.config/vivaldi/NativeMessagingHosts/`
- **Edge:** `~/.config/microsoft-edge/NativeMessagingHosts/`
- **Chromium:** `~/.config/chromium/NativeMessagingHosts/`

### 2. Install the extension

The extension will be available on the [Chrome Web Store](https://chromewebstore.google.com/) once published.

To install manually:

1. Go to `chrome://extensions`
2. Enable "Developer mode" (top right)
3. Click "Load unpacked" and select this folder

After loading, note the extension ID shown on the card. Edit `~/.config/google-chrome/NativeMessagingHosts/com.nofaff.silo.json` and replace `EXTENSION_ID_HERE` with that ID.

### 3. Reload the extension

Go back to `chrome://extensions` and click the reload button on the extension. The native messaging host will now accept connections from it.

## How it works

1. Right-click any link
2. Click "Open with Silo"
3. Silo's picker appears, letting you choose a browser or profile

**Note:** Each browser row in Silo's picker has an "Always" button that creates a rule for that domain. If you click it, that domain will skip the picker and open silently in your chosen browser next time you use "Open with Silo".

The originating site sees nothing. No data is sent to the site about the redirect.

## See also

- [Silo](https://github.com/no-faff/Silo) - the browser picker itself
- [Open with Silo (Firefox)](https://github.com/no-faff/silo-firefox) - the Firefox version

## Licence

MIT
