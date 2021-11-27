export async function getMahJongTileImage(code: string) {
  switch (code) {
    case '0m':
      return await import('../img/0m.png');
    case '0p':
      return await import('../img/0p.png');
    case '0s':
      return await import('../img/0s.png');
    case '1m':
      return await import('../img/1m.png');
    case '1p':
      return await import('../img/1p.png');
    case '1s':
      return await import('../img/1s.png');
    case '1z':
      return await import('../img/1z.png');
    case '2m':
      return await import('../img/2m.png');
    case '2p':
      return await import('../img/2p.png');
    case '2s':
      return await import('../img/2s.png');
    case '2z':
      return await import('../img/2z.png');
    case '3m':
      return await import('../img/3m.png');
    case '3p':
      return await import('../img/3p.png');
    case '3s':
      return await import('../img/3s.png');
    case '3z':
      return await import('../img/3z.png');
    case '4m':
      return await import('../img/4m.png');
    case '4p':
      return await import('../img/4p.png');
    case '4s':
      return await import('../img/4s.png');
    case '4z':
      return await import('../img/4z.png');
    case '5m':
      return await import('../img/5m.png');
    case '5p':
      return await import('../img/5p.png');
    case '5s':
      return await import('../img/5s.png');
    case '5z':
      return await import('../img/5z.png');
    case '6m':
      return await import('../img/6m.png');
    case '6p':
      return await import('../img/6p.png');
    case '6s':
      return await import('../img/6s.png');
    case '6z':
      return await import('../img/6z.png');
    case '7m':
      return await import('../img/7m.png');
    case '7p':
      return await import('../img/7p.png');
    case '7s':
      return await import('../img/7s.png');
    case '7z':
      return await import('../img/7z.png');
    case '8m':
      return await import('../img/8m.png');
    case '8p':
      return await import('../img/8p.png');
    case '8s':
      return await import('../img/8s.png');
    case '9m':
      return await import('../img/9m.png');
    case '9p':
      return await import('../img/9p.png');
    case '9s':
      return await import('../img/9s.png');
    default:
      return await import('../img/tileBack.png');
  }
}
