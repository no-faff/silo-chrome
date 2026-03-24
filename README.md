# Open with Silo (Chrome)

A Chrome/Chromium extension that adds "Open with Silo" to the right-click context menu on any link. Sends the URL to [Silo](https://github.com/no-faff/Silo), a browser picker for Linux, so you can choose which browser or profile to open it in.

Works with Chrome, Brave, Vivaldi, Edge and any Chromium-based browser. There is no toolbar button. Just install it and right-click any link.

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

## Permissions

Chrome will show that this extension can "Communicate with cooperating native applications". This is the native messaging permission. It means the extension can talk to Silo, which is a program installed on your computer. This is the same mechanism used by password managers like KeePassXC and Bitwarden.

You may also see "Allow access to file URLs" and "Collect errors" in the extension settings. "Allow access to file URLs" lets the right-click menu appear on local file links. "Collect errors" is a Chrome developer feature for debugging. Neither sends any data anywhere.

The extension does not read or modify any web pages. It does not access your browsing history, bookmarks, passwords or any other data. It has no network access. The only thing it does is send the URL you right-clicked to Silo.

## Privacy

This extension collects no data. There is no telemetry, no analytics and no network access. The URL you click is sent to Silo on your local machine and nowhere else. The source code is public and you can verify this yourself.

## See also

- [Silo](https://github.com/no-faff/Silo) - the browser picker itself
- [Open with Silo for Firefox](https://github.com/no-faff/silo-firefox) - the Firefox version
- [Find](https://github.com/no-faff/ulauncher-find) - Ulauncher extension for finding files instantly

## Licence

MIT
