// STYLES  

const BORDER = {
    border : '1px solid #d2d2d2',
    borderRadius: '3px'
}

const TEXT = {
    textAlign: 'left',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const MARGIN = {
    margin: '7px  0 3px 0',
}

const HEIGHT = {
    height: 34,
}

const BACK = {
    backgroundColor: '#ccccccab'
}

export { BORDER, TEXT, MARGIN, HEIGHT, BACK }

// COLORS

const BREESE = '#81d4dc'
const YELLOW = '#ead960'
const PURPLE = '#281b5dab'
const APPLY = '#1d7133d9'
const GREY = '#281b5dab'

export { BREESE, YELLOW, PURPLE, APPLY, GREY }

const initialState = {
    query: { 
        query: { 
            dataQuery: { 
                symbol: 'aapl', 
                apikey: '1BI6YDAWRHP1U8OI' 
            } 
        } 
    },
    form: {
        strategy: {
            values: {
                qty: 10,
                indicator: 'rsi',
                condition: '<',
                valueCondition: 50,
                risk: 2,
                stopLoss: 100,
                passAfterLoss: 5,
                exitCause: '%',
                exitAmount: 2,
                rsiStep: 20,
                emaStep: 10,
                results: {},
            }
        }
    }
}

export { initialState }