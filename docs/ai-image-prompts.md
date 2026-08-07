# Промпти для AI-генерації фото продукції

Тимчасова заміна, поки немає реальних фото виробів.
Готові файли класти в `src/assets/products/` під іменами нижче — картки
підхоплять їх автоматично (див. [README](../README.md)).

**Формат:** ~1600×1200 px, співвідношення 4:3, без тексту й водяних знаків.

---

## Три речі, які треба тримати в кожному промпті

**1. Фото має виглядати знятим на телефон.** Реальні фото цеху на сайті —
звичайні знімки з мобільного. Якщо поруч поставити глянцеву студійну картинку,
вона одразу читається як стокова підробка й підриває довіру до всього сайту.
Тому просимо саме аматорський знімок: широкий об'єктив телефону, все в різкості
(без художнього розмиття), лише денне світло, трохи неідеальний кадр.

**2. Середовище — українське.** Моделі за замовчуванням генерують американську
дійсність: передмістя, вініловий сайдинг, цвинтар-газон без огорож, кухня з
островом.

**3. Середовище — доглянуте.** Якщо просто написати «Ukrainian village», модель
домалює сірість: облуплений тиньк, бетонний паркан, панельку, багно.
Об'єкт має бути новим і чистим, але зняте це має бути по-простому.

Загальний хвіст, який варто лишати в усіх промптах:

```
Amateur smartphone photo, shot on an iPhone by the workshop owner, casual
snapshot: wide phone lens with slight distortion, everything in focus with deep
depth of field, natural available daylight only, handheld eye-level view,
slightly off-centre imperfect framing, typical phone HDR processing,
mild noise in the shadows, plain unedited look.
Eastern European Ukrainian setting, Zhytomyr region, contemporary and
well-maintained: clean, neatly finished, tidy surroundings, green trees.
NOT American suburbia, no vinyl siding, no palm trees.
No run-down look, no peeling plaster, no cracked concrete, no Soviet panel
blocks, no rusty metal, no litter, no muddy ground, no gloomy grey sky.
No studio lighting, no shallow depth of field or bokeh, no professional
colour grading, no magazine or catalogue styling, no 3D render or CGI look.
No text, no lettering, no watermark.
```

**Камінь регіону** (для достовірності): сірий і рожевий коростишівський граніт,
чорне житомирське габро/лабрадорит.

---

## pamyatnyky.jpg — Пам'ятники та надгробки

```
Amateur smartphone photo of a polished black gabbro granite gravestone monument
in a well-kept Ukrainian cemetery, Eastern European Orthodox setting: neat rows
of plots with clean granite curbing and paved granite tiles between them, tidy
low forged-metal fencing, mown grass, fresh flowers, birches and pines around.
The monument is new: mirror-polished blank front face without any inscription,
precise granite base. Sunny day, natural daylight, plain handheld snapshot
taken standing in front of the grave, whole monument in frame, everything in
focus, phone HDR look, slightly tilted horizon.
No people. No text or lettering on the stone, no rust, no weeds, no litter,
no shallow depth of field, no studio lighting, no professional retouching,
not an American lawn cemetery.
```

## stilnyci.jpg — Стільниці

```
Amateur smartphone photo of a polished dark speckled granite countertop in a
freshly renovated modern Ukrainian kitchen, Eastern European apartment: simple
contemporary cabinets in light wood and warm grey, clean PVC window with a
tilt-and-turn handle, tiled backsplash, a kettle and a bowl of apples on the
stone, potted herbs on the sill. Daylight from the window, no lamps or flash.
Casual handheld snapshot taken from standing height along the countertop,
wide phone lens, everything sharp from edge to edge, visible mineral grain and
reflections in the granite, typical phone HDR.
No text, no brand logos, no bokeh, no studio lighting, no styled magazine
composition, no dated Soviet-era furniture, not a large American kitchen.
```

## brukivka.jpg — Бруківка

```
Amateur smartphone photo of grey granite cobblestone paving freshly laid in a
fan pattern in the front yard of a modern Ukrainian private house, Eastern
European setting: clean light-plastered house, brick fence pillars with forged
metal sections, trimmed lawn, thuja bushes, stacked split granite cubes on a
wooden pallet at the edge. Sunny afternoon, natural light and crisp shadows.
Handheld snapshot taken while standing on the path and looking down at an
angle, wide phone lens, whole yard visible, everything in focus, sharp stone
texture, phone HDR processing.
No people, no text, no mud, no weeds between the stones, no bokeh,
no drone or aerial view, no professional composition,
not an American driveway.
```

## bordyury.jpg — Бордюри та поребрики

```
Amateur smartphone photo of grey granite kerbstones and garden edging installed
along a paved path in the yard of a modern Ukrainian private house, Eastern
European setting: long sawn granite kerb blocks separating the lawn from
cobblestone paving, a flowerbed edged with the same stone, clean plastered
house and brick fence pillars behind, trimmed thuja. Sunny day, natural
daylight. Handheld snapshot taken while standing on the path and looking along
the kerb line, wide phone lens, everything in focus, sharp stone texture,
phone HDR processing.
No people, no text, no mud, no weeds, no bokeh, no studio lighting,
no professional composition, not an American driveway.
```

## oblytsuvannya.jpg — Облицювальний і фасадний камінь

```
Amateur smartphone photo of a newly finished building facade clad in grey
granite slabs with a flamed textured finish, contemporary Ukrainian town
building in Zhytomyr: clean light plaster above, polished granite plinth
cladding, modern windows, granite-paved sidewalk, green trees nearby.
Sunny day, natural daylight grazing the stone texture.
Handheld snapshot taken from the pavement across the street, slight upward
angle with mild wide-lens perspective distortion, everything in focus,
plain unedited phone photo.
No text, no signage, no English lettering, no peeling plaster, no graffiti,
no Soviet panel blocks, no bokeh, no professional architectural framing,
not American suburban architecture.
```

## dekor.jpg — Декоративний камінь

```
Amateur smartphone photo of decorative natural stone elements in a tidy garden
of a modern Ukrainian private house: a polished grey granite sphere and a
carved black granite vase with flowers standing on a mown lawn, granite
stepping stones, thuja and ornamental grasses, flowerbeds, a neat stone-and-
forged-iron fence behind. Sunny day, natural daylight, soft shadows on grass.
Casual handheld snapshot taken from standing height a few steps away,
both objects fully in frame and in focus, wide phone lens, phone HDR look.
No people, no text, no clutter, no bokeh, no studio lighting,
no landscape-magazine styling, not an American backyard.
```

## skhody.jpg — Сходи

```
Amateur smartphone photo of a granite staircase at the entrance of a modern
Ukrainian private house, Eastern European setting: grey polished granite treads
and risers, simple stainless-steel handrail, clean plastered wall with a
contemporary entrance door, granite-paved path, trimmed lawn and thuja on both
sides. Sunny day, natural daylight.
Handheld snapshot taken from the path at a three-quarter angle, whole staircase
in frame, slightly crooked horizon, everything in focus, wide phone lens,
plain unedited phone photo.
No people, no text or signage, no chipped concrete, no rust, no bokeh,
no professional lighting or retouching, not an American porch.
```

## pidvikonnya.jpg — Підвіконня

```
Amateur smartphone photo of a polished dark speckled granite windowsill in a
bright freshly renovated Ukrainian room, Eastern European interior: clean PVC
window with a tilt-and-turn handle, light neutral walls, simple curtains, a
couple of potted plants and a book on the wide stone sill, view of a green
courtyard with chestnut and linden trees outside.
Daylight from the window only, no lamps or flash, bright window slightly
blown out as phone cameras do.
Casual handheld snapshot taken standing beside the window, sill running across
the frame, rounded polished edge visible, everything in focus, phone HDR look.
No text, no Soviet panel buildings outside, no dated furnishings, no bokeh,
no studio lighting, no interior-magazine styling, not an American bay window.
```

---

## Опційно: OG-зображення (`public/og-image.jpg`, 1200×630)

```
Amateur smartphone photo of neatly stacked polished granite slabs in a tidy
Eastern European stone workshop, Ukrainian small-scale production: brick and
plastered walls, timber roof beams, overhead crane, swept floor, grey and black
granite slabs in racks. Daylight through a large window, no artificial lighting.
Handheld snapshot from the middle of the workshop, wide phone lens, everything
in focus, horizontal frame with empty space on the left for a text overlay.
No people, no text, no clutter, no derelict look, no bokeh,
no professional industrial photography look.
```

## Опційно: фон Hero (якщо треба замінити фото цеху)

```
Amateur smartphone close-up of a large freshly cut grey granite block with
clean saw marks and rich mineral grain, Ukrainian workshop, daylight from the
side, deep contrast, everything in focus, horizontal composition with room for
a text overlay, plain unedited phone photo.
No people, no text, no studio lighting, no bokeh, no CGI look.
```

---

## Застереження

AI-фото — тимчасове рішення для запуску. Це **не реальні вироби замовника**,
тож щойно з'являться справжні фото — перезаписати файли тими самими іменами.
Інакше клієнт може приїхати по те, чого в цеху немає.
