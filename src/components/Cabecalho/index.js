import { Typography } from "@mui/material";
import Image from "next/image";
import estilos from "./Cabecalho.module.css";

export const Cabecalho = () => {
  return (
    <div className={estilos.main}>
      <Image
        src="/logodoguinho.png"
        width={50}
        height={60}
        alt="Logo oficial Marcela Love Dogs"
        quality={80}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={estilos.imagem}
      />
      <Typography className={estilos.titulo}>
        Escola Pet Marcela Love Dogs
      </Typography>
    </div>
  )
}