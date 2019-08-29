# Unused Card

A simple card that shows your unused entities

[![GitHub Release][releases-shield]][releases]
[![License][license-shield]](LICENSE.md)

![Project Maintenance][maintenance-shield]
[![GitHub Activity][commits-shield]][commits]

[![Discord][discord-shield]][discord]
[![Community Forum][forum-shield]][forum]

## Options

| Name | Type | Requirement | Description | Default
| ---- | ---- | ------- | ----------- | -------
| type | string | **Required** | `custom:unused-card`
| name | string | **Optional** | Card name | `Unused Entities`

## Install

*This card is available in [HACS](https://github.com/custom-components/hacs) (Home Assistant Community Store)*

### Simple install

1. Download and copy `unused-card.js` from the [dist](https://github.com/custom-cards/unused-card/dist) into your `config/www` directory.

2. Add a reference to `mini-media-player-bundle.js` inside your `ui-lovelace.yaml`.

  ```yaml
  resources:
    - url: /local/unused-card.js
      type: module
  ```

[Troubleshooting](https://github.com/thomasloven/hass-config/wiki/Lovelace-Plugins)

[commits-shield]: https://img.shields.io/github/commit-activity/y/custom-cards/unused-card.svg?style=for-the-badge
[commits]: https://github.com/custom-cards/unused-card/commits/master
[discord]: https://discord.gg/5e9yvq
[discord-shield]: https://img.shields.io/discord/330944238910963714.svg?style=for-the-badge
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg?style=for-the-badge
[forum]: https://community.home-assistant.io/c/projects/frontend
[license-shield]: https://img.shields.io/github/license/custom-cards/unused-card.svg?style=for-the-badge
[maintenance-shield]: https://img.shields.io/maintenance/yes/2019.svg?style=for-the-badge
[releases-shield]: https://img.shields.io/github/release/custom-cards/unused-card.svg?style=for-the-badge
[releases]: https://github.com/custom-cards/unused-card/releases
