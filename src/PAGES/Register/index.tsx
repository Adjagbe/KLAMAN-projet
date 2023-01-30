import React, { useEffect, useState } from 'react'
import Footer2 from '../../SCREENS/Footer2';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom';

const baseURL = "http://localhost/api_klaman/V1/registrations/create.php";

function Register() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState<any>({
        gender: "",
        last_name: "",
        first_name: "",
        age: 0,
        email_address: "",
        profil_id: 0,
        phone: "",
        is_phone_whatsapp: 0,
        town: "",
        size: "",
        dyed: "",
        weight: 0,
        shoe_size: 0,
        hair_color: "",
        hair_type: "",
        eye_color: "",
        profil_image: "",
        created_at: new Date().getTime()
    })

    // requet send data base
    const validate = async () => {
        setLoading(true) //spinners loader
        try {
            axios
                .post(baseURL, {
                    ...form
                })
                .then(() => { setLoading(false); navigate("/") }) //spinners loader and redirect to over page
                .catch(() => setLoading(false))
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <>
            <div className='flex justify-center text-3xl space-x-3 my-10'>
                <div className='font-bold'>KLAMAN 2023</div> <div className=''>Hôtesse / Modèle Photo</div>
            </div>
            <div className='flex justify-between my-16'>
                <div className='text-xl flex flex-col space-y-2 pl-20 pr-10'>
                    <span className='font-bold text-white bg-pink-800 flex items-center w-full justify-center rounded py-3 mb-4'>Hôtesse VIP</span>
                    Participez à des événements, cérémonies , dîners selon votre disponibilité.
                    <div><span className='font-bold'>Type : </span> Contrat à temps partiel</div>
                    <div><span className='font-bold'>Info : </span>  Ce recrutement est direct, vous êtes automatiquement sélectionnée.</div>
                    <div><span className='font-bold'>Frais d'inscription : </span> 10 000 FCFA</div>
                    <div>Obtenez un : <span className='font-bold'>📸 Shooting,🛡️ Badge, 📃 Contrat.</span> </div>
                </div>

                <div className='text-xl flex flex-col space-y-2 pl-10 pr-20'>
                    <span className='font-bold text-white bg-pink-800 flex items-center w-full justify-center rounded py-3 mb-4'>MODELE PHOTOS</span>
                    Participez à des publicités TV , où sur les réseaux sociaux .
                    <div><span className='font-bold'>Type : </span> Contrat à temps partiel</div>
                    <div><span className='font-bold'>Info : </span>  Ce recrutement est direct, vous êtes automatiquement sélectionnée.</div>
                    <div><span className='font-bold'>Frais d'inscription : </span> 15 000 FCFA</div>
                </div>

            </div>
            <div className='bord  border-solid border border-black rounded my-5 '>
                <div className='bg-pink-800 text-2xl text-white font-bold flex justify-center items-center py-3'>Formulaire d’inscription</div>
                <form>
                    <div>
                        <div className='flex space-x-20 mx-52 my-10'>
                            <div className='flex flex-col'>
                                <label className='mb-3'> Vous êtes :</label>
                                <select
                                    value={form?.gender}
                                    onChange={(e: any) => {
                                        setForm({ ...form, gender: e.target.value })
                                    }}
                                    className="border bg-transparent border-purple-400 rounded-lg w-72 h-8 px-3">
                                    <option value="">Sélectionner</option>
                                    <option value="Homme">Homme</option>
                                    <option value="Femme">Femme</option>
                                    <option value="Enfant">Enfant</option>
                                </select>
                            </div>
                            <div className='flex flex-col'>
                                <label className='mb-3'>Nom :</label>
                                <input
                                    value={form?.last_name}
                                    onChange={(e: any) => {
                                        setForm({ ...form, last_name: e.target.value })
                                    }}
                                    className="border border-purple-400 rounded-lg w-72 h-8 px-3" type="text" />
                            </div>
                            <div className='flex flex-col'>
                                <label className='mb-3'>Prénoms :</label>
                                <input
                                    value={form?.first_name}
                                    onChange={(e: any) => {
                                        setForm({ ...form, first_name: e.target.value })
                                    }}
                                    className="border border-purple-400 rounded-lg w-72 h-8 px-3" type="text" />
                            </div>
                        </div>
                        <div className='flex space-x-20 mx-52 my-10'>
                            <div className='flex flex-col'>
                                <label className='mb-3'>Age :</label>
                                <input
                                    value={form?.age}
                                    onChange={(e: any) => {
                                        setForm({ ...form, age: e.target.value })
                                    }}
                                    className="border border-purple-400 rounded-lg w-36 h-8 px-3" type="number" />
                                <small>Exemple : 18</small>
                            </div>
                            <div className='flex flex-col'>
                                <label className='mb-3'>E-mail :</label>
                                <input
                                    value={form?.email_address}
                                    onChange={(e: any) => {
                                        setForm({ ...form, email_address: e.target.value })
                                    }}
                                    className="border border-purple-400 rounded-lg w-36 h-8 px-3" type="email" />

                            </div>
                            <div className='flex flex-col'>
                                <label className='mb-3'> Profil :</label>
                                <select
                                    value={form?.profil_id}
                                    onChange={(e: any) => {
                                        setForm({ ...form, profil_id: e.target.value })
                                    }}
                                    className="border border-purple-400 rounded-lg bg-transparent w-36 h-8 pl-3">
                                    <option value="">Sélectionner</option>
                                    <option value="1">Hôtesse 10.000 FCFA</option>
                                    <option value="2">Modèle photo 15.000 FCFA</option>
                                    <option value="3">Les 2- 21.500 FCFA</option>
                                </select>
                            </div>
                            <div className='flex flex-col'>
                                <label className='mb-3'>WhatsApp ? :</label>
                                <select
                                    value={form?.is_phone_whatsapp}
                                    onChange={(e: any) => {
                                        setForm({ ...form, is_phone_whatsapp: e.target.value })
                                    }}
                                    className="border border-purple-400 rounded-lg bg-transparent w-36 h-8 pl-3">
                                    <option value="">Sélectionner</option>
                                    <option value="1">oui</option>
                                    <option value="2">non</option>
                                </select>
                            </div>
                            <div className='flex flex-col'>
                                <label className='mb-3'>Contact:</label>
                                <input
                                    value={form?.phone}
                                    onChange={(e: any) => {
                                        setForm({ ...form, phone: e.target.value })
                                    }}
                                    className="border border-purple-400 rounded-lg w-36 h-8 pl-3" type="tel" />
                                <small>Exemple: 05 45 87 09 77</small>
                            </div>
                        </div>


                    </div>


                    <div className='flex  mx-52 space-x-28 my-10'>
                        <div>Commune :</div>
                        <div className='flex flex-col space-y-2'>
                            <div className='flex space-x-2'> <input type="radio"


                                onChange={(e: any) => {
                                    setForm({ ...form, town: e.target.value })
                                }}
                                name='commune' value="Adjamé" /> <span>Adjamé</span>
                            </div>

                            <div className='flex space-x-2'> <input type="radio"

                                onChange={(e: any) => {
                                    setForm({ ...form, town: e.target.value })
                                }}
                                name='commune' value="Abobo" /> <span>Abobo</span>
                            </div>


                            <div className='flex space-x-2'> <input type="radio"

                                onChange={(e: any) => {
                                    setForm({ ...form, town: e.target.value })
                                }}
                                name='commune' value="Anyama" /> <span>Anyama</span>
                            </div>


                            <div className='flex space-x-2'> <input type="radio"

                                onChange={(e: any) => {
                                    setForm({ ...form, town: e.target.value })
                                }}
                                name='commune' value="Attecoube" /> <span>Attécoubé</span>
                            </div>


                        </div>
                        <div className='flex flex-col space-y-2'>
                            <div className='flex space-x-2'> <input type="radio"

                                onChange={(e: any) => {
                                    setForm({ ...form, town: e.target.value })
                                }}
                                name='commune' value="Bingerville" /> <span>Bingerville</span>
                            </div>


                            <div className='flex space-x-2'> <input type="radio"
                                value="Cocody"
                                onChange={(e: any) => {
                                    setForm({ ...form, town: e.target.value })
                                }}
                                name='commune' /> <span>Cocody</span>
                            </div>

                            <div className='flex space-x-2'> <input type="radio"
                                value="Koumassi"
                                onChange={(e: any) => {
                                    setForm({ ...form, town: e.target.value })
                                }}
                                name='commune' /> <span>Koumassi</span>
                            </div>


                            <div className='flex space-x-2'> <input type="radio"
                                value="Macory"
                                onChange={(e: any) => {
                                    setForm({ ...form, town: e.target.value })
                                }}
                                name='commune' /> <span>Macory</span>
                            </div>


                        </div>
                        <div className='flex flex-col space-y-2'>
                            <div className='flex space-x-2'> <input type="radio"
                                value="Plataeu"
                                onChange={(e: any) => {
                                    setForm({ ...form, town: e.target.value })
                                }}
                                name='commune' /> <span>Plataeu</span>
                            </div>


                            <div className='flex space-x-2'> <input type="radio"
                                value="Port-Bouet"
                                onChange={(e: any) => {
                                    setForm({ ...form, town: e.target.value })
                                }}
                                name='commune' /> <span>Port-Bouet</span>
                            </div>

                            <div className='flex space-x-2'> <input type="radio"
                                value="Treichville"
                                onChange={(e: any) => {
                                    setForm({ ...form, town: e.target.value })
                                }}
                                name='commune' /> <span>Treichville</span>
                            </div>


                            <div className='flex space-x-2'> <input type="radio"
                                value="Songon"
                                onChange={(e: any) => {
                                    setForm({ ...form, town: e.target.value })
                                }}
                                name='commune' /> <span>Songon</span>
                            </div>


                        </div>
                        <div className='flex flex-col space-y-2'>
                            <div className='flex space-x-2'> <input type="radio"
                                value="Yopougon"
                                onChange={(e: any) => {
                                    setForm({ ...form, town: e.target.value })
                                }}
                                name='commune' /> <span>Yopougon</span>
                            </div>

                            <div className='flex space-x-2'> <input type="radio"
                                value="Autres"
                                onChange={(e: any) => {
                                    setForm({ ...form, town: e.target.value })
                                }}
                                name='commune' /> <span>Autres</span>
                            </div>

                        </div>
                    </div>


                    <div className='flex space-x-20 mx-52 my-10'>

                        <div className='flex flex-col'>
                            <label className='mb-3'>Taille (m) :</label>
                            <input
                                value={form?.size}
                                onChange={(e: any) => {
                                    setForm({ ...form, size: e.target.value })
                                }}
                                className="border border-purple-400 rounded-lg w-48 h-8 px-3" type="text" />
                            <small>Exemple: 1m 75</small>
                        </div>
                        <div className='flex flex-col'>
                            <label className='mb-3' > Teint :</label>
                            <select
                                value={form?.dyed}
                                onChange={(e: any) => {
                                    setForm({ ...form, dyed: e.target.value })
                                }}
                                className="border bg-transparent border-purple-400 rounded-lg w-48 h-8 px-3">
                                <option value="">Sélectionner</option>
                                <option value="clair">Clair</option>
                                <option value="noir">Noir</option>
                                <option value="bronzé">Bronzé</option>
                                <option value="blanche">Blanche</option>
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label className='mb-3'>Poids (kg) :</label>
                            <input
                                value={form?.weight}
                                onChange={(e: any) => {
                                    setForm({ ...form, weight: e.target.value })
                                }}
                                className="border border-purple-400 rounded-lg w-48 h-8 px-3" type="text" />
                            <small>Exemple: 90</small>
                        </div>
                        <div className='flex flex-col'>
                            <label className='mb-3'>Pointure :</label>
                            <input
                                value={form?.shoe_size}
                                onChange={(e: any) => {
                                    setForm({ ...form, shoe_size: e.target.value })
                                }}
                                className="border border-purple-400 rounded-lg w-48 h-8 px-3" type="text" />
                            <small>Exemple: 34</small>
                        </div>
                    </div>
                    <div className='flex space-x-20 mx-52 my-10'>

                        <div className='flex flex-col'>
                            <label className='mb-3'>Couleur de cheveux :</label>
                            <input
                                value={form?.hair_color}
                                onChange={(e: any) => {
                                    setForm({ ...form, hair_color: e.target.value })
                                }}
                                className="border border-purple-400 rounded-lg w-48 h-8 px-3" type="text" />
                            <small>Exemple: Noir</small>
                        </div>
                        <div className='flex flex-col'>
                            <label className='mb-3' > Type de cheveux :</label>
                            <select
                                value={form?.hair_type}
                                onChange={(e: any) => {
                                    setForm({ ...form, hair_type: e.target.value })
                                }}
                                className="border bg-transparent border-purple-400 rounded-lg w-48 h-8 px-3">
                                <option value="">Sélectionner</option>
                                <option value="Crépus">Crépus</option>
                                <option value="Metissé">Metissé</option>
                                <option value="Lisse">Lisse</option>
                                <option value="Bouclé">Bouclé</option>
                                <option value="Rasé">Rasé</option>
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label className='mb-3'>Couleur des yeux:</label>
                            <input
                                value={form?.eye_color}
                                onChange={(e: any) => {
                                    setForm({ ...form, eye_color: e.target.value })
                                }}
                                className="border  border-purple-400 rounded-lg w-48 h-8 px-3" type="text" />
                            <small>Exemple: vert</small>
                        </div>
                        <div className='flex flex-col'>
                            <label className='mb-3'>Télécharger une photo :</label>
                            <input
                                onChange={(event: any) => {

                                    const reader = new FileReader();
                                    if (event.target.files && event.target.files.length) {
                                        const [file] = event.target.files;
                                        reader.readAsDataURL(file);
                                        reader.onload = async () => {
                                            setForm({ ...form, profil_image: reader.result })
                                        };
                                    }
                                }}
                                type="file" className=" w-48 h-8 pl-3" />

                            {
                                form?.profil_image && <img className='rounded-lg w-32 mt-5' src={form?.profil_image} alt="" />
                            }

                        </div>
                    </div>
                    <div className='grid place-items-end pr-60 py-10'>

                        <button type='button'

                        // not send the donnee, if input is none
                            disabled={
                                !form?.gender ||
                                !form?.last_name ||
                                !form?.first_name ||
                                !form?.email_address ||
                                !form?.phone ||
                                !form?.town ||
                                !form?.size ||
                                !form?.dyed ||
                                !form?.hair_color ||
                                !form?.hair_type ||
                                !form?.eye_color ||
                                !form?.profil_image
                            }
                            onClick={() => {
                                //if input exist 
                                if (
                                    form?.gender &&
                                    form?.last_name &&
                                    form?.first_name &&
                                    form?.email_address &&
                                    form?.phone &&
                                    form?.town &&
                                    form?.size &&
                                    form?.dyed &&
                                    form?.hair_color &&
                                    form?.hair_type &&
                                    form?.eye_color &&
                                    form?.profil_image
                                ) {
                                    validate() //function data base 
                                }

                            }} className='bg-pink-800 text-white text-lg font-semibold rounded w-32 h-10'> Envoyer</button>
                            
                            
                             {loading ? (
                                //spinners loader
                            <RotatingLines
                                strokeColor="grey"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="96"
                                visible={true}

                            />

                        ) : (<p></p>

                        )}

                    </div>

                </form>
            </div>

            <Footer2 />
        </>
    )
}

export default Register