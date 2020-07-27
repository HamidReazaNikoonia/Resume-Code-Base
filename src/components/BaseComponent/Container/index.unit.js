import Comp from './index.vue'

describe('Container.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp)
    expect(wrapper.element).toMatchSnapshot()
  })
})
