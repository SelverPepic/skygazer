# Skygazer — read the sky

A small local weather-reading game. Players study real, location-tagged cloud photos and archived hourly weather, first guess a cloud genus, then predict rain, cloud-cover and temperature changes. A field guide explains the ten WMO genera, how they form and dissipate, and where to read more. The app is educational, not a live forecast or safety service.

## Data notes

The bundled hourly field notes use Open-Meteo's Historical Weather API and ERA5 reanalysis at the nearest grid cell for each photo's date and coordinates. This is a regional model estimate, not a station reading at the photographer's exact position. Camera times are shown as recorded and matched to the local timezone. Forecast scoring bins the next three hourly values into clearly described categories; it is a game comparison, not a forecast evaluation. Source: [Open-Meteo Historical Weather API](https://open-meteo.com/en/docs/historical-weather-api). Data attribution: Open-Meteo and its sources; [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

The Galley Common images `galley-common.jpg`, `galley-common-02.jpg`, and `galley-common-03.jpg` are same-place, same-minute photos by Rubbish computer, 11 June 2022, licensed CC BY-SA 4.0. The two supplementary wide frames show multiple cloud forms, not an isolated single cloud. No additional same-moment matched frames were found for the other two cases.

## Photo credits

Images are unmodified; all photos are from Wikimedia Commons. Click each source page to see full license terms.

- `assets/saint-remeze.jpg`, also the Cumulus guide photo — Medium69 (William Crochot), [Cumulus humilis - 39](https://commons.wikimedia.org/wiki/File:Cumulus_humilis_-_39.jpg), CC BY-SA 4.0.
- `assets/galley-common.jpg` and `assets/cloud-guide/cirrus.jpg` — Rubbish computer, [Cirrus clouds Galley Common June 11 2022 01](https://commons.wikimedia.org/wiki/File:Cirrus_clouds_Galley_Common_June_11_2022_01.jpg), CC BY-SA 4.0.
- `assets/galley-common-02.jpg` — Rubbish computer, [same-moment wide view 02](https://commons.wikimedia.org/wiki/File:Cirrus_clouds_Galley_Common_June_11_2022_02.jpg), CC BY-SA 4.0.
- `assets/galley-common-03.jpg` — Rubbish computer, [same-moment wide view 03](https://commons.wikimedia.org/wiki/File:Cirrus_clouds_Galley_Common_June_11_2022_03.jpg), CC BY-SA 4.0.
- `assets/bad-bergzabern.jpg` — Friedrich Haag, [004 2018 05 14 Extremes Wetter](https://commons.wikimedia.org/wiki/File:004_2018_05_14_Extremes_Wetter.jpg), CC BY-SA 4.0.
- `assets/cloud-guide/cirrostratus.jpg` — The Great Cloudwatcher, [Cirrostratus fibratus](https://commons.wikimedia.org/wiki/File:Cirrostratus_fibratus.jpg), CC BY-SA 3.0.
- `assets/cloud-guide/cirrocumulus.jpg` — The High Fin Sperm Whale, [Cirrocumulus clouds](https://commons.wikimedia.org/wiki/File:Cirrocumulus_clouds.JPG), CC BY-SA 3.0.
- `assets/cloud-guide/altostratus.jpg` — Liridon, [Altostratus undulatus cloud 02](https://commons.wikimedia.org/wiki/File:Altostratus_undulatus_cloud_02.jpg), CC BY-SA 4.0. Source is a stitched panorama.
- `assets/cloud-guide/altocumulus.jpg` — Rollcloud, [Altocumulusclouds](https://commons.wikimedia.org/wiki/File:Altocumulusclouds.jpg), CC BY 3.0.
- `assets/cloud-guide/nimbostratus.jpg` — Noellamankaah, [Nimbostratus cloud](https://commons.wikimedia.org/wiki/File:Nimbostratus_cloud.jpg), CC BY-SA 4.0.
- `assets/cloud-guide/stratocumulus.jpg` — Делфина, [Stratocumulus clouds](https://commons.wikimedia.org/wiki/File:Stratocumulus_clouds.JPG), CC BY-SA 4.0.
- `assets/cloud-guide/stratus.jpg` — Daniel Akuoko, [Stratus clouds](https://commons.wikimedia.org/wiki/File:Stratus_clouds.jpg), CC BY-SA 4.0.
- `assets/cloud-guide/cumulonimbus.jpg` — PpatrickK, [Cumulonimbuscloud](https://commons.wikimedia.org/wiki/File:Cumulonimbuscloud.jpg), CC BY-SA 4.0.

## Further reading

[WMO International Cloud Atlas](https://cloudatlas.wmo.int/en/principles-of-cloud-classification-genera.html) · [US National Weather Service cloud classification](https://www.weather.gov/lmk/cloud_classification) · [Met Office clouds](https://weather.metoffice.gov.uk/learn-about/weather/types-of-weather/clouds) · [Met Office pressure systems](https://weather.metoffice.gov.uk/learn-about/weather/how-weather-works/high-and-low-pressure) · [UCAR cloud formation](https://scied.ucar.edu/learning-zone/clouds/how-clouds-form) · [MetEd satellite interpretation](https://www.meted.ucar.edu/asmet/asmet10/navmenu.php?page=4-1-1&tab=1&type=flash) · [Wikipedia: list of cloud types](https://en.wikipedia.org/wiki/List_of_cloud_types).
