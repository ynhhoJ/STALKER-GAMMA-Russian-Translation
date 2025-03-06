# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!--
Recommendation: for ease of reading, use the following order:
- Added
- Changed
- Deprecated
- Removed
- Fixed
- Security
-->
## [0.7.0] - 2025-03-06
### Added
- `ui_st_inventory_grok_artefacts.xml`: Make menu options with uppercase
- `st_wait.xml`: Make menu option `Провести время` with uppercase
- `st_zone_keeper.xml`: Translated only strings `У вас есть X в инвентаре` and `У вас есть X в тайниках`
- Synced some files with translations by @SaloEater

### Changed
- `ui_st_invetory.xml`: Modify menu option `Создать тайник` to begin with uppercase
- `ui_st_jamming.xml`: Modify `Сломанный (-ая)` to `Сломанный`

## [0.6.0] - 2025-03-01
### Added
- `st_items_sup.xml`: **Special Upgrade Pack** translation
- `st_iwpmp9.xml`: **Brugger & Thomet MP9** translation
- `z_st_mp_magazine.xml`: **MP9** magazines translations
- Added two fixes made by @SaloEater https://github.com/Grokitach/Stalker_GAMMA/pull/449/commits/6be69a48c20f9524afb733019fba26ce5924ecfc & https://github.com/Grokitach/Stalker_GAMMA/pull/449/commits/a676abdee602b590fb19668adf374b93e0376d4b into release folder

### Changed
- Installation guide was changed
- `ui_st_faction_starts.xml`: Locations name changes
	- `Кладбище грузовиков` to `Кладбище техники`
	- `Мусор` to `Свалка`

## [0.5.0] - 2025-02-28
### Added
- `pp2.xml`: **ПП-2000**
- `pp2o.xml`: **ПП-2000 "Оператор"**
- `st_g36_rwap.xml`:
	1. **G36C "Merc"**
	2. **G36V**
	3. **G36KA4**
- `st_items_weapons_bas_rus.xml`: Added

### Changed
- `st_items_weapons_bas_rus`: Fixed typo in `Rifle Dynamics RD-9x39 ISG` description
- `st_items_weapons_grok.xml`: Updated translations

## [0.4.0] - 2025-02-25
### Added
- Translated information about weapons:
	- `st_items_weapons_ace_52.xml`: **Galil ACE-52**
	- `st_items_weapons_addons_grok.xml`:
		1. **Leupold M40**
		2. **Aimpoint H1H**
	- `st_items_weapons_ithacam37.xml`:
		1. **Ithaca M37 «Riot»**
		2. **Ithaca M37 «Trenchgun»**
		3. **Ithaca M37 «Defense»**
		4. **Ithaca M37 «Stakeout»**
		5. **Ithaca M37 «Sawn Off»**
	- `st_items_weapons_am17.xml`: **АМ-17**
	- `st_items_weapons_amb17.xml`: **АМБ-17**
	- `st_items_weapons_arisaka.xml`: **Arisaka Type 38**
	- `st_items_weapons_augmented.xml`:
		1. **Steyr AUG A1**
		2. **Steyr AUG A2**
		3. **Steyr AUG A3**
		4. **Thales EF88**
		5. **Steyr AUG A3 9mm**
	- `st_items_weapons_deagle.xml`:
		1. **Desert Eagle «Степной орёл»**
		2. **Desert Eagle**
	- `st_items_weapons_dtmdr.xml`:
		1. **Desert Tech MDR 7.62x51**
		2. **Desert Tech MDR 5.56x45**
	- `st_weapon_displays.xml`: Added translations for weapons display rack
	- `st_wpn_benelli_m1014.xml`: **M1014**
	- `st_wpn_brn180.xml`:
		1. **BRN-180**
		2. **BRN-180 «Лич»**
	- `st_wpn_g36.xml`:
		1. **G36**
		2. **G36K**
		3. **G36C**
		4. **G36 «СТРАХ»**
	- `st_wpn_mk47.xml`: **CMMG Mk47 Mutant**
	- `st_wpn_mp155.xml`: **Байкал МП-155**
	- `st_wpn_rpk16.xml`: **РПК-16**
	- `st_wpn_steyr_scout.xml`:
		1. **Steyr Scout 5.56**
		2. **Steyr Scout 7.62**
	- `st_wpn_vihr.xml`: **СР-3М «Вихрь»**
	- `st_wpn_winchester1873.xml`: **Winchester Model 1873**
	- `st_wpn_xm4.xml`: **XM177e2**

- Completed information with included parts of Mauser K98 Kit (`st_items_weapons_mauser_kit`)

## [0.3.0] - 2025-02-24
### Added
- `st_items_weapons_grok.xml` - **G.A.M.M.A Weapons Pack**
- `st_perk_based_artefacts_perks.xml` - **Perk-Based Artefacts**

### Changed
- `ui_st_jamming.xml` - Improve general quality of translations & make more consitent experience.
- `ui_st_invetory.xml` - Improve general quality of translations & make more consitent experience.

## [0.2.0] - 2025-02-22
### Added
- `st_ammo_parts.xml` - **145 - Ammo Maker**
- `ui_st_jamming.xml` - **G.A.M.M.A Unjam Reload** based on GMTOP
- `ui_st_momopate_wstats.xml` - **Momopate's Detailed Weapon Stats**

### Changed
- Was improved some translations for `st_items_decor.xml`

## [0.1.0] - 2025-02-21
### Added
- Added detailed information of manufacturer for [`9a91_vsk94.xml`](https://www.moddb.com/mods/stalker-anomaly/addons/9a91-and-vsk-94-reanimation)
- Was used last [correctly encoded version](https://github.com/Grokitach/Stalker_GAMMA/commit/f628ac95ea6e93bf3d283a931f81b6193f5d6fe9) of `st_items_ammo.xml` and actualized information from [`Slightly increased Ash12 power`](https://github.com/Grokitach/Stalker_GAMMA/commit/5839a019691fffe7276b09805d00817a4861542c) & [`7.62x54r FMJ and 7.92 FMJ price and perf matching`](https://github.com/Grokitach/Stalker_GAMMA/commit/88dae6f58a5b8020a92d4567909a8c1e9511f909)
- Implemented translation for **Even More Hideout Furniture - facelessez** (`st_items_decor.xml`)
- Implemented translation for **Even More Hideout Furniture - facelessez** (`st_items_doors.xml`)
- Added translation for missed quests of **New Tasks - iTheon** modification
- Unified translations for **G.A.M.M.A UI** modification (capitalize letters of some options)
- Implemented translation for **SortingPlus** modification
