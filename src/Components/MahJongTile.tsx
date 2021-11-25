import React from "react";
import { getMahJongTileImage } from "../utils/getMahJongTileImage";

interface Props {
  code: string;
}

export function MahJongTile(props: Props) {
  const { code } = props;

  const [image, setImage] = React.useState<string>();

  React.useEffect(() => {
    (async () => {
      const img = await getMahJongTileImage(code);
      setImage(img.default);
    })();
  }, [code]);

  return (
    <div>
      <img className="object-scale-down" src={image} alt={code} />
    </div>
  );
}
