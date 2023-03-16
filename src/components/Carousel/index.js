import React from 'react';
import { Card, Grid, Stack, Container } from '@mui/material';
import teniscarousel from './teniscarousel.png'
import tenis03 from './tenis03.png'
import ornament from './Ornament.png'
import Botao from '../BotaoOferta';
import './style.css'
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

export default function Carousel() {
  const [atual, setAtual] = React.useState(0);

  const items = [
    {
      label: "Melhores ofertas personalizadas",
      titulo: "Queima de stoque Nike 🔥",
      descricao: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
      img1: {
        path: teniscarousel,
        title: "Titulo da imagem",
        alt: "Alt da imagem"
      },
      img2: {
        path: ornament,
        title: "Titulo da imagem",
        alt: "Alt da imagem"
      },
    },
    {
      label: "Segundo slide",
      titulo: "Segundo Slide 🔥",
      descricao: "Segundo slide.",
      img1: {
        path: tenis03,
        title: "Titulo da imagem",
        alt: "Alt da imagem"
      },
      img2: {
        path: ornament,
        title: "Titulo da imagem",
        alt: "Alt da imagem"
      },
    },
    {
      label: "Terceiro slide",
      titulo: "Terceiro slide",
      descricao: "Terceiro slide",
      img1: {
        path: teniscarousel,
        title: "Titulo da imagem",
        alt: "Alt da imagem"
      },
      img2: {
        path: ornament,
        title: "Titulo da imagem",
        alt: "Alt da imagem"
      },
    },
  ];

  function anterior() {
    if (atual === 0) {
      setAtual(items.length - 1);
    } else {
      setAtual(atual - 1);
    }
  }

  function proximo() {
    if (atual < items.length - 1) {
      setAtual(atual + 1);
    } else {
      setAtual(0)
    }
  }

  return (
    <div>
      <Card id="card-slide" style={{ backgroundColor: "#F5F5F5", padding: "50px 0" }}>
        <Stack id="card-slide-stack" direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <ChevronLeft sx={{ fontSize: "60px" }} onClick={anterior} />

          <Container>
            <Grid container>
              <Grid item xs={3} id="bloco-texto">
                <p className="texto1">{items[atual].label}</p>
                <h2 className="texto2">{items[atual].titulo}</h2>
                <p className="texto3">{items[atual].descricao}</p>
                <Botao />
              </Grid>

              <Grid item xs={6}>
                {items[atual].img1 ? (
                  <img id="img-tenis" src={items[atual].img1.path} alt={items[atual].img1.alt} />
                ) : null}
              </Grid>
            </Grid>
          </Container>

          {items[atual].img2 ? (
            <img id="img-ornament" src={items[atual].img2.path} alt={items[atual].img2.alt} />
          ) : null}

          <ChevronRight sx={{ fontSize: "60px" }} onClick={proximo} />
        </Stack>

        <div className='container-bolinha'>
          {items.map((item, index) => (
            <div className={index === atual ? 'bolinha ativo' : 'bolinha'}></div>
          ))}
        </div>
      </Card>
    </div>
  );
}