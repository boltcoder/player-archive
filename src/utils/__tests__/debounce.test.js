import debounce from '../debounce';
describe('Debounce Util',()=> {
  let sampleFn = null;
  beforeEach(()=>{
    sampleFn = jest.fn();
  })
  it('Test the function is not called before timeout', ()=> {
    const debouncedSampleFn = debounce(sampleFn, 2000);
    debouncedSampleFn();
    debouncedSampleFn();
    expect(sampleFn).toHaveBeenCalledTimes(0);
  })
  
  it('Test the function is called only once after timeout', async ()=> {
    const debouncedSampleFn = debounce(sampleFn, 2000);
    debouncedSampleFn();
    debouncedSampleFn();
    debouncedSampleFn();
    debouncedSampleFn();
    await new Promise((r) => setTimeout(r, 3000));
    expect(sampleFn).toHaveBeenCalledTimes(1);
  })

  it('Test the function is called only once after timeout with arguments of last call', async ()=> {
    const debouncedSampleFn = debounce(sampleFn, 2000);
    debouncedSampleFn();
    debouncedSampleFn();
    debouncedSampleFn();
    debouncedSampleFn("shrey");
    await new Promise((r) => setTimeout(r, 3000));
    expect(sampleFn).toHaveBeenCalledTimes(1);
    expect(sampleFn).toHaveBeenLastCalledWith("shrey");
  })

})