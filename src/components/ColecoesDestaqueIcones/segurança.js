<>
<div className="bg">
   <Container>
          <h3>Coleções em destaque</h3>
          <Grid container  direction="row" justifyContent="center" alignItems="center"  spacing={2}> 
              <Grid item>
                  <Avatar sx={{ bgcolor: "white", height: "104px", width: "104px" }}>
                      <img src={camisetas}></img>
                  </Avatar>
                  <p>Camisetas</p>
              </Grid>
              <Grid item>
                  <Avatar sx={{ bgcolor: "white", height: "104px", width: "104px" }}>
                      <img src={calcas}></img>
                  </Avatar>
                  <p>Calças</p>
              </Grid>
              <Grid item>
                  <Avatar sx={{ bgcolor: "white", height: "104px", width: "104px", "& img": {width: "80%"} }}>
                      <img src={bones}></img>
                  </Avatar>
                  <p>Bonés</p>
              </Grid>
              <Grid item>
                  <Avatar sx={{ bgcolor: "white", height: "104px", width: "104px" }}>
                      <img src={fones}></img>
                  </Avatar>
                  <p>Headphones</p>
              </Grid>
              <Grid item>
                  <Avatar sx={{ bgcolor: "white", height: "104px", width: "104px" }}>
                      <img src={tenisi}></img>
                  </Avatar>
                  <p>Tênis</p>
              </Grid>
          </Grid>
   </Container>
</div>
</>