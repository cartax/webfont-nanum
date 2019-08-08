# Webfont Nanum   

## Document
Please see [Document](https://cartax.github.io/webfont-nanum/) for more information.   


## Structure   
```
o
|-- dist/
|   `-- font-family/
|       `-- subset/
|           |-- kr/
|           `-- kr-hanja/
|-- docs/
|-- CHANGELOG
|-- LICENSE
`-- README.md
```


## Overview   
```
| font-family       | 100   | 200           | 300       | 400       | 500   | 600   | 700   | 800           | 900   |
|------------------ |-----  |------------   |-------    |---------  |-----  |-----  |------ |-----------    |---    |
| NanumBarunGothic  | -     | UltraLight    | Light     | Regular   | -     | -     | Bold  | -             | -     |
| NanumBarunpen     | -     | -             | -         | Regular   | -     | -     | Bold  | -             | -     |
| NanumBrush        | -     | -             | -         | Regular   | -     | -     | -     | -             | -     |
| NanumGothic       | -     | -             | Light     | Regular   | -     | -     | Bold  | ExtraBold     | -     |
| NanumGothicEco    | -     | -             | -         | Regular   | -     | -     | Bold  | ExtraBold     | -     |
| NanumMyeongjo     | -     | -             | -         | Regular   | -     | -     | Bold  | ExtraBold     | -     |
| NanumMyeongjoEco  | -     | -             | -         | Regular   | -     | -     | Bold  | ExtraBold     | -     |
| NanumPen          | -     | -             | -         | Regular   | -     | -     | -     | -             | -     |
| NanumSquare       | -     | -             | Light     | Regular   | -     | -     | Bold  | ExtraBold     | -     |
| NanumSquareRound  | -     | -             | Light     | Regular   | -     | -     | Bold  | ExtraBold     | -     |
```


## Usage   

### HTML   
```
<link rel="stylesheet" href="file/path/font.css" />
```

### CDN   
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/cartax/webfont-nanum/dist/{font-family}/subset/{kr, kr-hanja}/font.css" />
```

### CSS   
sans-serif   
```
body { 
    font-family: 'Nanum{BarunGothic, Barunpen, Gothic, GothicEco}', sans-serif; 
    font-weight: {200, 300, 400, 700, 800};
}
```

serif:   
```
body { 
    font-family: 'Nanum{Brush, Myeongjo, MyeongjoEco, Pen, Square, SquareRound}', serif; 
    font-weight: {300, 400, 700, 800};
}
```


## Changelog   
Please see [CHANGELOG](CHANGELOG) for more information what has changed recently.   


## License   
Webfont Nanum Subset fonts are licensed under the [MITE LICENSE](LICENSE).   