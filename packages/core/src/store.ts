import { createStoreon, StoreonModule } from 'storeon'

interface State {
  sidenavVisibility: boolean
}

interface Events {
  'sidenav/toggleVisibility': undefined
}

const ui: StoreonModule<State, Events> = store => {
  store.on('@init', () => {
    return {
      sidenavVisibility: false
    }
  })
  store.on(
    'sidenav/toggleVisibility',
    ({ sidenavVisibility }) => { return { sidenavVisibility: !sidenavVisibility } }
  )
}

const store = createStoreon<State, Events>([
  ui
])

export {
  store
}
