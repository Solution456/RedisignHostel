import { computed, ref } from "vue"


export const useSortedEvents = (events) => {

    const sortVariant = ref(null);
    const sortedEvents = computed(() => {
    switch (sortVariant.value) {
        case 1:
        return [...events].sort((event1, event2) => event1?.date - event2?.date);
        case 2:
        return [...events].sort((event1, event2) => event2?.date - event1?.date);
        default:
        return [...events];
    }
    });


    return {
        sortedEvents,
        sortVariant
    }
}