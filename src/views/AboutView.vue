<template>
  <div class="about-view">
    <h1>À Propos de RIZCARDEAU</h1>
    <p>
      Bienvenue chez RIZCARDEAU, votre plateforme d'enchères en ligne de confiance.
      Nous nous engageons à offrir une expérience utilisateur exceptionnelle, que vous soyez un acheteur ou un vendeur.
    </p>
    <h2>Notre Mission</h2>
    <p>
      Notre mission est de connecter les acheteurs et les vendeurs de manière transparente et efficace.
      Nous croyons en la transparence, la sécurité et la satisfaction de nos utilisateurs.
    </p>
    <h2>Notre Histoire</h2>
    <p>
      RIZCARDEAU a été fondé en 2024 avec l'objectif de révolutionner le marché des enchères en ligne.
      Depuis nos débuts modestes, nous avons grandi pour devenir l'une des plateformes les plus respectées du secteur.
    </p>
    <h2>Notre Équipe</h2>
    <p>
      Notre équipe est composée de professionnels passionnés par le commerce en ligne et dédiés à l'amélioration continue de notre plateforme.
      Nous travaillons sans relâche pour garantir que chaque utilisateur ait une expérience positive et enrichissante.
    </p>
    <h2>Nos Valeurs</h2>
    <ul>
      <li><strong>Intégrité :</strong> Nous agissons avec honnêteté et éthique dans toutes nos interactions.</li>
      <li><strong>Innovation :</strong> Nous cherchons constamment à innover pour améliorer notre plateforme.</li>
      <li><strong>Client d'abord :</strong> La satisfaction de nos utilisateurs est notre priorité absolue.</li>
    </ul>
    <h2>Nos Services</h2>
    <p>
      Chez RIZCARDEAU, nous offrons une variété de services pour répondre à vos besoins :
    </p>
    <ul>
      <li><strong>Enchères en ligne :</strong> Participez à des enchères en temps réel avec des milliers d'autres utilisateurs.</li>
      <li><strong>Ventes aux enchères :</strong> Vendez vos articles à un large public et obtenez les meilleurs prix.</li>
      <li><strong>Support client :</strong> Bénéficiez d'un support client dédié pour toutes vos questions et préoccupations.</li>
    </ul>
    <h2>Contactez-nous</h2>
    <p>
      Vous avez des questions ou des commentaires ? N'hésitez pas à nous contacter via les moyens suivants :
    </p>
    <ul>
      <li><strong>Email :</strong> <a href="mailto:samuel.mottier@eduvaud.ch">samuel.mottier@eduvaud.ch</a></li>
      <li><strong>Téléphone :</strong> +41 79 862 33 48</li>
      <li><strong>Adresse :</strong> Recordon 1bis, 1001 Lausanne, Suisse</li>
    </ul>

    <div class="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.595938404018!2d6.632273515606781!3d46.52000777912795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c6510a2b212d1%3A0xf0da1b8f21a7b5e4!2sRecordon%201bis%2C%201001%20Lausanne%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1689081962784!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style="border:0;"
        allowfullscreen=""
        loading="lazy">
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
};
</script>

<style scoped>
.about-view {
  min-height: calc(100vh - 60px);
  width: 100%;
  background: linear-gradient(120deg, #ffaeae 0%, #8726ff 130%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.about-view h1, .about-view h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
}

.about-view p, .about-view ul {
  margin-bottom: 20px;
  line-height: 1.6;
  color: #fff;
}

.about-view ul {
  padding-left: 20px;
}

.about-view ul li {
  margin-bottom: 10px;
}

.about-view a {
  color: #1e90ff;
  text-decoration: none;
}

.about-view a:hover {
  text-decoration: underline;
}


.map-container {
  width: 100%;
  height: 400px;
  overflow: hidden;
}
</style>
