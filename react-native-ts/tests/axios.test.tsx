import axios from 'axios'

// for mocking all axios functions
jest.mock("axios")
  
// this is going to be part of the component
const getDataWithAxios = async () : Promise<any>=> {
  // called in real code, mocked in test
  const resp = await axios.get("http://www.amazon.com")
  // real axios.get response return a "data" field, so we'll need to mock as below
  return resp.data
}

it('mocks axios get', async () => {

  // the mocked response can contain whatever is needed for the code
  // like status
  const theResponse = {status: 200, data: {'content' : 'message'}}
  // In my VS code, this line shows as a problem, but runs fine.
  // This sets up the promise result once. It can have variations
  axios.get.mockResolvedValueOnce(theResponse);
  // Call the tested method
  const result = await getDataWithAxios()
  // Although wasn't called, the argument was what we sent
  expect(axios.get).toHaveBeenCalledWith("http://www.amazon.com")
  // This grabs the content field, but can be whatever you're
  // looking for in the response.
  expect(result.content).toEqual("message");
})


