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
      <li><strong>Email :</strong> <a href="mailto:contact@rizcardeau.com">samuel.mottier@eduvaud.ch</a></li>
      <li><strong>Téléphone :</strong> +41 79 862 33 48</li>
      <li><strong>Adresse :</strong> Recordon 1bis, 1001 Lausanne, Suisse</li>
    </ul>
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

.about-view h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
}

.about-view h2 {
  margin-top: 20px;
  color: #fff;
}

.about-view p {
  margin-bottom: 20px;
  line-height: 1.6;
  color: #fff;
}

.about-view ul {
  margin-bottom: 20px;
  color: #fff;
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
</style>
