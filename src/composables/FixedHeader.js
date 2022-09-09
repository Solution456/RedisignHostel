const CssFixedHeader = ['h-14', 'border-b' , 'border-blue-700', 'fixed', 'top-0', 'z-10', 'w-full', 'transition-all',  'duration-300', 'ltr:right-0', 'rtl:left-0', 'rtl:xl:pr-72', 'bg-white', 'shadow-md', 'backdrop-blur', 'sm:h-15']


const cssHeader = ['h-14', 'border-b', 'border-blue-700']

export const useFixedHeader = () => {

    const setFixedHeader = () => {
        let element = document.getElementById('head')
        CssFixedHeader.forEach(item => {
            element.classList.add(item)
        })
    }

    const removeFixedHeader = () => {
        let element = document.getElementById('head')
        CssFixedHeader.forEach(item => {
            element.classList.remove(item)
        })
        cssHeader.forEach( item => {
            element.classList.add(item)
        })
    }

    return {
        setFixedHeader,
        removeFixedHeader
    }

}