<template>
  <div>
    <NuxtLayout class="scroller">
      <Hero />
      <div class="section_right">
        <div class="content_text">
          <h2>Reservations</h2>
          <p>
            Afin de pouvoir prévoir nos quantités au mieux et vous accueillir
            dans les meilleures conditions, la réservation est essentielle.
          </p>

          <p>
            Brunch le dimanche seulement 11:30 / 15:00
            <br />
            Formule buffet à volonté à 40€ (Tarif tout doux pour les enfants)
          </p>
          <p>Dîner printemps : du jeudi au lundi soir ( sauf exceptions )</p>

          <p>
            Ete : tous les jours 19h00 / 22h30
            <br />
            Un menu fixe est imposé pour les tables de 10 et + ( qui consiste à
            recevoir l’intégralité de la carte du jour à partager)
          </p>
        </div>
        <div class="content_img">
          <img src="~assets/pancake.webp" alt="" />
        </div>
      </div>
      <div class="section_left">
        <div class="content_img">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
        </div>
        <div class="content_text">
          <h2>Menu</h2>
          <p>
            Notre carte change quotidiennement en fonction de la pêche ou de la
            récolte de nos fournisseurs avec qui nous travaillons étroitement.
            <br />
            <br />
            Nous ne pouvons pas prévoir à l’avance les produits qui figurerons à
            notre carte mais pouvons vous certifier qu’ils seront de saison,
            frais et le plus locaux possible. Nos huitres viennent de la Kabane,
            nos palourdes du village de l’Herbe ou Lucie les pêche avec amour,
            nos poissons de nos pêcheurs préférés Paul & Paul et Éole, nos
            volailles sont élevées dans les landes par les frères Poulet et nos
            bœuf par Maximin et sont nourries à l’herbe ( la verdure, pas le
            village ni la drogue.)
          </p>
          <p>
            Nous faisons au mieux pour garder les prix les plus raisonnables
            possibles tout en payant nos collaborateurs, fournisseurs et autres
            au meilleurs prix.
          </p>
        </div>
      </div>
      <div class="section_right">
        <div class="content_text">
          <h2>À-propos</h2>
          <p>
            La Mayzou est un restaurant familial en plein centre du Cap-ferret,
            sublime village du bassin d’Arcachon. Mayzou signifie maison en
            gascon et c’est ainsi que nous voulons que vous vous sentiez. Notre
            cuisine change en fonction de nos fournisseurs et de nos humeurs et
            bien sûr en fonction des saison. La cheffe, Juliette a rapporté de
            ses longues années de voyages des saveurs du monde entier et vous
            fait voyager en gardant les pieds sous la table.
          </p>
        </div>
        <div class="content_img">
          <img src="~assets/mayzou_plate.jpeg" alt="" />
        </div>
      </div>
      <div class="section_left">
        <div class="content_img">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
        </div>
        <div class="content_text">
          <h2>NOTRE ÉQUIPE</h2>
          <p>
            Notre équipe, qui cohabite sous le toit de cette Mayzou est une
            équipe passionnée qui a pour objectif de vous faire passer le
            meilleur moment possible grâce à son professionnalisme et surtout sa
            bonne humeur a toute épreuve
          </p>
          <p>
            Plus on est de soleils plus on brille. Nous avons déjà une équipe de
            folie mais sait-on jamais, si tu veux postuler envoie cv et lettre
            de motivation à
            <a href="mailto:jesuisunsoleil@mayzou.com"
              >jesuisunsoleil@mayzou.com</a
            >
          </p>
        </div>
      </div>
      <div class="section_right">
        <div class="content_text">
          <h2>Privatisation</h2>
          <p>
            Nous adorons faire des évènements de vos rêves une réalité Pour vos
            demandes de privatisation, merci de nous contacter par email.
            <br />
            <a href="mailto:juliette@mayzou.com">juliette@mayzou.com</a>
          </p>
        </div>
        <div class="content_img">
          <img src="~assets/pancake.webp" alt="" />
        </div>
      </div>
      <div class="section_left">
        <div class="content_img">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
        </div>
        <div class="content_text">
          <h2>CONTACT</h2>
          <p>
            Merci de réserver en ligne via le lien, si votre table n’est pas
            disponible c’est surement qu’elle n’est … pas disponible . N’hésitez
            pas à passer la porte et venir nous voir en personne, on est tout le
            temps à la Mayzou car on y habite et y cuisine tôt le matin. En cas
            de dernier recours ( genre tu es & NYC mais tu veux venir diner
            demain soir à 24 et vous êtes tous Vegan, écris nous à
            <a href="mailto:juliette@mayzou.com">juliette@mayzou.com</a>)
          </p>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
.section_right {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;

  .content_text {
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 3rem;

    h2 {
      font-size: 3rem;
      line-height: 1;
      font-weight: 400;
      color: #3d3d3d;
      margin-bottom: 3rem;
    }
    p {
      color: #4d4d4d;
      margin-bottom: 2rem;
      text-align: justify;
      width: 80%;
      letter-spacing: 0.1em;
    }
  }
  .content_img {
    width: 54.75%;
    height: 100vh;
    img {
      width: 100% !important;
      height: 100%;
      object-fit: cover;
      transition: transform 0.1s;
    }
  }
  @media (max-width: 900px) {
    margin-top: 10vh;
    flex-direction: column;
    height: auto;

    .content_text {
      width: 80% !important;
      margin: 5%;
      h2 {
        font-size: 2em;
      }
      p {
        width: 80%;
      }
    }
    .content_img {
      width: 100% !important;
    }
  }
}
.section_left {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;

  .content_text {
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 5rem;

    h2 {
      font-size: 3rem;
      line-height: 1;
      font-weight: 400;
      color: #3d3d3d;
      margin-bottom: 3rem;
    }
    p {
      color: #4d4d4d;
      margin-bottom: 2rem;
      text-align: justify;
      width: 80%;
      letter-spacing: 0.1em;
    }
  }
  .content_img {
    width: 55%;
    height: 100vh;
    img {
      width: 100% !important;
      height: 100%;
      object-fit: cover;
      transition: transform 0.1s;
    }
  }
  @media (max-width: 900px) {
    margin-top: 10vh;
    flex-direction: column;
    height: auto;
    .content_text {
      width: 80% !important;
      order: 1;
      h2 {
        font-size: 2em;
      }
      p {
        width: 80%;
      }
    }
    .content_img {
      width: 100% !important;
      order: 2;
    }
  }
}
a {
  color: #fdca40;
}
</style>

<script setup></script>
