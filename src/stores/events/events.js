import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useEventsStore = defineStore('events', () => {
    const events = ref([
        {
            id: 1,
            url: "https://i.pinimg.com/564x/6e/64/f3/6e64f3172b2d90cbc1a3f747018d2614.jpg",
            date:new Date('09/09/2022'), 
            title:'lorem ispum1',
            description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, veniam.'
            
        },
          {
            id: 2,
            url: "https://i.pinimg.com/564x/7e/17/fc/7e17fc8bde30ba84b543dcbf748113ab.jpg",
            date:new Date('09/12/2022'),
            title:'lorem ispum2',
            description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, veniam.' 
        },
          {
            id: 3,
            url: "https://i.pinimg.com/564x/4a/08/01/4a080139ea7cb3b378c82d12cda6b0cd.jpg",
            date:new Date('10/10/2022'), 
            title:'lorem ispum3',
            description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, veniam.'
        },
          {
            id: 4,
            url: "https://i.pinimg.com/564x/65/1c/88/651c88bdaa4faadb07cc86191ac41b24.jpg",
            date:new Date('09/07/2022'), 
            title:'lorem ispum4',
            description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, veniam.'
        },
          {
            id: 5,
            url: "https://i.pinimg.com/564x/60/7c/26/607c26bb39e351eda00e0ae5361cdbfe.jpg",
            date:new Date('10/06/2022'), 
            title:'lorem ispum5',
            description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, veniam.'
        },
          {
            id: 6,
            url: "https://i.pinimg.com/564x/20/4f/c7/204fc76beccb6cb52b36ff9defcb91cc.jpg",
            date:new Date('05/09/2022'), 
            title:'lorem ispum6',
            description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, veniam.'
        },
    ])

    const CaraouselEvents = computed(() => events.value.filter(item =>  new Date() - item.date <= 720 * 60 * 60 * 1000))
    const OtherEvents = computed( () => events.value.filter(item =>  new Date() - item.date > 720 * 60 * 60 * 1000))

    return {events, CaraouselEvents, OtherEvents}
})