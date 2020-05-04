const createNewDoctor = (name, specialty, address) => {
  return {
    name: name,
    specialty: specialty,
    address: address,
  };
};

const newDoctor = createNewDoctor("Tom", "Aweseome", "115 Spicer Ct");
console.log(newDoctor);

const newPet = (name, breed) => {
  return {
    name,
    breed,
  };
};

const pet = newPet("Higss", "Australian Shepherd");
console.log(pet);
