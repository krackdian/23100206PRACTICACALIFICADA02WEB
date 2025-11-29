<template>
  <div class="listcard-container">
    <h2>Listado de Digimons</h2>

    <!-- Filtros -->
    <div class="filters">
      <input 
        type="text" 
        placeholder="Filtrar por nombre" 
        v-model="filterName"
      />

      <select v-model="filterLevel">
        <option value="">Todos los niveles</option>
        <option v-for="lvl in levels" :key="lvl" :value="lvl">
          {{ lvl }}
        </option>
      </select>
    </div>

    <!-- Cards -->
    <div class="cards-grid">
      <div class="card-item" v-for="d in filteredDigimons" :key="d.name">
        <img :src="d.img" alt="imagen" />
        <h3>{{ d.name }}</h3>
        <p>Nivel: {{ d.level }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.listcard-container {
  width: 90%;
  max-width: 1100px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
}

.filters {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.filters input,
.filters select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.card-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background: #fafafa;
  text-align: center;
}

.card-item img {
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 10px;
}
</style>

<script>
export default {
  data() {
    return {
      digimons: [],
      filterName: "",
      filterLevel: "",
      levels: []
    };
  },
  computed: {
    filteredDigimons() {
      return this.digimons.filter(d => {
        const matchName = d.name.toLowerCase().includes(this.filterName.toLowerCase());
        const matchLevel = this.filterLevel ? d.level === this.filterLevel : true;
        return matchName && matchLevel;
      });
    }
  },
  mounted() {
    this.loadDigimons();
  },
  methods: {
    async loadDigimons() {
      try {
        const res = await fetch("https://digimon-api.vercel.app/api/digimon");
        const data = await res.json();
        this.digimons = data;

        // Obtener niveles únicos
        this.levels = [...new Set(data.map(d => d.level))];
      } catch (err) {
        console.error("Error cargando Digimons", err);
      }
    }
  }
};
</script>