import React from 'react'
import Footer2 from '../../SCREENS/Footer2'

function Register() {
  return (
    <>
        <div className='flex justify-center text-3xl space-x-3 my-10'>
            <div className='font-bold'>KLAMAN 2023</div> <div className=''>Hôtesse / Modèle Photo</div>
        </div>
        <div className='flex my-16'>
        <div className='text-xl flex flex-col space-y-2 pl-20'>
                  <span className='font-bold text-purple-800 bg-black flex items-center w-36 justify-center rounded'><u>Hôtesse VIP</u></span>
              Participez à des événements, cérémonies , dîners selon votre disponibilité.
              <div><span className='font-bold'>Type : </span> Contrat à temps partiel</div>
              <div><span className='font-bold'>Info : </span>  Ce recrutement est direct, vous êtes automatiquement sélectionnée.</div>
              <div><span className='font-bold'>Frais d'inscription : </span> 10 000 FCFA</div>
              <div>Obtenez un : <span className='font-bold'>📸 Shooting,🛡️ Badge, 📃 Contrat.</span> </div>
        </div>

        <div className='text-xl flex flex-col space-y-2 pl-20'>
              <span className='font-bold text-purple-800 bg-black flex items-center w-52 justify-center rounded'><u>MODELE PHOTOS</u></span>
               Participez à des publicités TV , où sur les réseaux sociaux .
              <div><span className='font-bold'>Type : </span> Contrat à temps partiel</div>
              <div><span className='font-bold'>Info : </span>  Ce recrutement est direct, vous êtes automatiquement sélectionnée.</div>
              <div><span className='font-bold'>Frais d'inscription : </span> 15 000 FCFA</div>
        </div>

          </div>
        <div className='bord  border-solid border border-black rounded my-5 '>
              <div className='bg-pink-900 text-2xl text-white font-bold flex justify-center items-center'>Formulaire d’inscription</div>
            <form>
            
                  <div className='flex space-x-20 mx-52 my-10'>
                    <div className='flex flex-col'>
                        <label > Vous êtes :</label>
                          <select className="border bg-transparent border-gray-400 w-72 h-8 pl-3">
                              <option>Sélectionner</option>
                              <option>Homme</option>
                              <option>Femme</option>
                              <option>Enfant</option>
                          </select>
                    </div>
                    <div className='flex flex-col'>
                        <label>Nom :</label>
                          <input className="border border-gray-400 w-72 h-8 pl-3" type="text" />
                    </div>
                    <div className='flex flex-col'>
                    <label>Prénoms :</label>
                          <input className="border border-gray-400 w-72 h-8 pl-3" type="text" />
                   </div>
                </div>
                  <div className='flex space-x-20 mx-52 my-10'>
                      <div className='flex flex-col'>
                          <label>Age :</label>
                          <input className="border border-gray-400 w-72 h-8 pl-3" type="text" />
                          <small>Exemple : 18</small>
                      </div>
                      <div className='flex flex-col'>
                          <label > Profil :</label>
                          <select className="border border-gray-400 bg-transparent w-72 h-8 pl-3">
                              <option>Sélectionner</option>
                              <option>Hôtesse 10.000 FCFA</option>
                              <option>Modèle photo 15.000 FCFA</option>
                              <option>Les 2- 21.500 FCFA</option>
                          </select>
                      </div>
                      <div className='flex flex-col'>
                          <label>Contact / whatsApp :</label>
                          <input className="border border-gray-400 w-72 h-8 pl-3" type="tel" />
                          <small>Exemple: +225 05 45 87 09 77</small>
                      </div>
                </div>

                  <div className='flex  mx-52 space-x-28 my-10'>
                    <div>Commune :</div>
                    <div className='flex flex-col space-y-2'>
                          <div className='flex space-x-2'> <input type="radio" name='commune' /> <span>Adjamé</span></div>
                          <div className='flex space-x-2'> <input type="radio" name='commune' /> <span>Abobo</span></div>
                          <div className='flex space-x-2'> <input type="radio" name='commune' /> <span>Anyama</span></div>
                          <div className='flex space-x-2'> <input type="radio" name='commune' /> <span>Attécoubé</span></div>
                    </div>
                    <div className='flex flex-col space-y-2'>
                          <div className='flex space-x-2'> <input type="radio" name='commune' /> <span>Bingerville</span></div>
                          <div className='flex space-x-2'> <input type="radio" name='commune' /> <span>Cocody</span></div>
                          <div className='flex space-x-2'> <input type="radio" name='commune' /> <span>Koumassi</span></div>
                          <div className='flex space-x-2'> <input type="radio" name='commune' /> <span>Macory</span></div>
                    </div>
                    <div className='flex flex-col space-y-2'>
                          <div className='flex space-x-2'> <input type="radio" name='commune' /> <span>Plataeu</span></div>
                          <div className='flex space-x-2'> <input type="radio" name='commune' /> <span>Port-Bouet</span></div>
                          <div className='flex space-x-2'> <input type="radio" name='commune' /> <span>Treichville</span></div>
                          <div className='flex space-x-2'> <input type="radio" name='commune' /> <span>Songon</span></div>
                    </div>
                    <div className='flex flex-col space-y-2'>
                          <div className='flex space-x-2'> <input type="radio" name='commune' /> <span>Yopougon</span></div>
                          <div className='flex space-x-2'> <input type="radio" name='commune' /> <span>Autres</span></div>
                    </div>
                </div>
                  <div className='flex space-x-20 mx-52 my-10'>
                
                      <div className='flex flex-col'>
                          <label>Taille (m) :</label>
                          <input className="border border-gray-400 w-48 h-8 pl-3" type="text" />
                          <small>Exemple: 1m 75</small>
                      </div>
                      <div className='flex flex-col'>
                          <label > Teint :</label>
                          <select className="border bg-transparent border-gray-400 w-48 h-8 pl-3">
                              <option>Sélectionner</option>
                              <option>Clair</option>
                              <option>Noir</option>
                              <option>Bronzé</option>
                          </select>
                      </div>
                      <div className='flex flex-col'>
                          <label>Poids (kg) :</label>
                          <input className="border border-gray-400 w-48 h-8 pl-3" type="text" />
                          <small>Exemple: 90</small>
                      </div>
                      <div className='flex flex-col'>
                          <label>Pointure :</label>
                          <input className="border border-gray-400 w-48 h-8 pl-3" type="text" />
                          <small>Exemple: 34</small>
                      </div>
                  </div>
                <div className='grid place-items-end pr-60 py-10'>
                    <button className='bg-pink-800 text-white text-lg font-semibold rounded w-32 h-10'> Envoyer</button>
                </div>
                  
            </form>
          </div>

          <Footer2/>
    </>
  )
}

export default Register