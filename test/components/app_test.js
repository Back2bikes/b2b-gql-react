import { renderComponent , expect } from '../test_helper'
import App from '../../client/components/App'

describe('App' , () => {
  let component

  beforeEach(() => {
    component = renderComponent(App)
  }) 

  it('renders something', () => {
    expect(component).to.exist
  })

  it('is a container', () => {
    expect(component).to.have.class('container')
  })
  
  it('shows the correct text', () => {
    expect(component).to.contain('The App')
  })


})