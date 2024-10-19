module.exports = {
  async redirects() {
    return [
      {
        source: "/diceroller",
        destination: "/tools/diceroller",
        permanent: true,
      },
      {
        source: "/five_torches_deep/5e_monsters",
        destination: "/tools/five_torches_deep/fifth_edition_bestiary",
        permanent: true,
      },
      {
        source: "/five_torches_deep/random_map_generator",
        destination: "/tools/five_torches_deep/random_map_generator",
        permanent: true,
      },
      {
        source: "/myz/create_the_zone",
        destination: "/tools/mutant_year_zero/create_the_zone",
        permanent: true,
      },
      {
        source: "/shadow_of_the_demon_lord/encounter_builder",
        destination: "/tools/shadow_of_the_demon_lord/encounter_builder",
        permanent: true,
      },
      {
        source: "/shadow_of_the_demon_lord/rewards_generator",
        destination: "/tools/shadow_of_the_demon_lord/rewards_generator",
        permanent: true,
      },
      {
        source: "/shadow_of_the_demon_lord/travel_tool",
        destination: "/tools/shadow_of_the_demon_lord/travel_tool",
        permanent: true,
      },
      {
        source: "/shadowrun/mission_creation",
        destination: "/tools/shadowrun/mission_creation",
        permanent: true,
      },
      {
        source: "/shadowrun/rewards_calculator",
        destination: "/tools/shadowrun/rewards_calculator",
        permanent: true,
      },
      {
        source: "/shadowrun/npcs",
        destination: "/tools/shadowrun/npcs",
        permanent: true,
      },
      {
        source: "/shadowrun/heat",
        destination: "/tools/shadowrun/heat",
        permanent: true,
      },
    ];
  },
};
