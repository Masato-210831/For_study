import {add} from './add'


const Example = () => {
  const dynamicImport = async (a , b) => {
    const module = await import ('./add')
    console.log( module.add(a, b))
  }
  dynamicImport(1, 2)

  
};

export default Example;
