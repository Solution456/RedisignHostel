import { computed, ref } from "vue"


export const useSortedActualingEvents = (sortedEvents) => {
    const selectedVariant = ref(null)
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const SortedActualingEvents = computed(() => {
        switch(selectedVariant.value){
            case 'Прошедшие': return sortedEvents.value.filter(event => today - event?.date > 0)
            case 'Актуальные': return sortedEvents.value.filter(event => today - event?.date <= 0)
            default: return sortedEvents.value 
        }
    })
    


    return {
        SortedActualingEvents,
        selectedVariant
    }
}