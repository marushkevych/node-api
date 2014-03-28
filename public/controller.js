function SelectorController($scope){
    
    $scope.exactComparator = function(card, criteria){
        console.log('card', card)
        console.log('criteria', criteria)
        return card.cardValue === criteria.cardValue;
    }
    
    $scope.closestMatchComparator = function(card, criteria){
        return false;
    }
    
    /**
     * cardValue: standard, variable, standardAndVariable
     * 
     * graphicCustomization: full, partial, none
     * 
     * deliveryTime: 1, 5, 30
     * 
     */
    $scope.cards = [
        // PP red
        {
            name: 'PP Standart',
            isPP: true,
            cardValue: 'standard',
            graphicCustomization: 'none',
            deliveryTime: 1
        },
        // GC red
        {
            name: 'GC Standart',
            isPP: false,
            cardValue: 'standard',
            graphicCustomization: 'none',
            deliveryTime: 1
        },
        // PP yellow
        {
            name: 'PP Partial Custom',
            isPP: true,
            cardValue: 'standardAndVariable',
            graphicCustomization: 'partial',
            deliveryTime: 5
        },
        // GC yellow
        {
            name: 'GC Partial Custom',
            isPP: false,
            cardValue: 'standardAndVariable',
            graphicCustomization: 'partial',
            deliveryTime: 5
        },
        // PP green
        {
            name: 'PP Full Custom',
            isPP: true,
            cardValue: 'standardAndVariable',
            graphicCustomization: 'full',
            deliveryTime: 30
        },
        // GC green
        {
            name: 'GC Full Custom',
            isPP: false,
            cardValue: 'standardAndVariable',
            graphicCustomization: 'full',
            deliveryTime: 30
        },
        // PP blue
        {
            name: 'PP Variable Card',
            isPP: true,
            cardValue: 'variable',
            graphicCustomization: 'none',
            deliveryTime: 1
        },
        // GC blue
        {
            name: 'GC Variable Card',
            isPP: false,
            cardValue: 'variable',
            graphicCustomization: 'none',
            deliveryTime: 1
        }
    ];
}
