//lifestyle-component.js
import { getLifestyleData } from './model.js';

Vue.component('lifestyle-section', {
    data() {
        return {
            lifestyleData: {},
            expandedPhotos: {} // Tracks expanded photos for each section
        };
    },    
    created() {
        this.lifestyleData = getLifestyleData();
    },
    methods: {
        togglePhoto(section, index) {
            if (this.expandedPhotos[section] === index) {
                this.$set(this.expandedPhotos, section, null); // Collapse the photo
            } else {
                this.$set(this.expandedPhotos, section, index); // Expand the new photo
            }
        },
        isExpanded(section, index) {
            return this.expandedPhotos[section] === index;
        }
    },
    template: `
        <div>
            <div v-for="(data, section) in lifestyleData" :key="section">
            <h1>{{ section.toUpperCase() }}</h1>
            <p>{{ data.paragraph }}</p>
            <div class="photo-container">
                <img v-for="(photo, index) in data.photos" :key="photo"
                    :src="photo" :alt="section"
                    class="photo-thumbnail"
                    :class="{ 'photo-thumbnail--expanded': isExpanded(section, index) }"
                    @click="togglePhoto(section, index)" />
            </div>
        </div>
        </div>
    `
});

new Vue({
    el: '#lifestyle-container'
});
