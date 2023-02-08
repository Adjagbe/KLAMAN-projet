import React, { useEffect, useState } from 'react'
import Footer2 from '../../SCREENS/Footer2';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const apiUrl = process.env.REACT_APP_API_BASE_URL;

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
        profil_image_2: "",
        created_at: new Date().getTime()
    })

    // requet send data base
    const validate = async () => {
        setLoading(true) //spinners loader
        try {
            const stringData = {
                gender: form?.gender,
                last_name: form?.last_name,
                first_name: form?.first_name,
                age: form?.age,
                email_address: form?.email_address,
                profil_id: form?.profil_id,
                phone: form?.phone,
                is_phone_whatsapp: form?.is_phone_whatsapp,
                town: form?.town,
                size: form?.size,
                dyed: form?.dyed,
                weight: form?.weight,
                shoe_size: form?.shoe_size,
                hair_color: form?.hair_color,
                hair_type: form?.hair_type,
                eye_color: form?.eye_color,
                created_at: form?.created_at
            };
            axios
                .post(apiUrl + '/registrations/create', {
                    ...form, datas: JSON.stringify([stringData])
                })
                .then(() => { setLoading(false); 
                    toast.success('Inscription réussie, Vous serez contacté(e) dans les plus brefs délais!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    navigate("/")
                
                }) //spinners loader and redirect to over page
                .catch(() =>{ setLoading(false); 
                    toast.error("Une erreur s'est produite, veuillez réessayer!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                })
        } catch (error) {
            console.log(error)
            setLoading(false)
            toast.error("Une erreur s'est produite, veuillez réessayer!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }

    return (
        <>
            <div className='flex justify-center text-3xl space-x-3 my-10'>
                <div className='font-bold'>KLAMAN 2023</div> <div className=''>Hôtesse / Modèle Photo</div>
            </div>
            <div className='flex justify-between my-16'>
                <div className='text-xl flex flex-col pl-20 pr-10'>
                    <span className='font-bold text-white bg-pink-800 flex items-center w-full justify-center rounded py-3 mb-4'>Hôtesse VIP</span>
                    Participez à des événements, cérémonies , dîners selon votre disponibilité.
                    <div><span className='font-bold uppercase'>Type : </span> Contrat à temps partiel</div>
                    <div><span className='font-bold uppercase'>Info : </span>  Ce recrutement est direct, vous êtes automatiquement sélectionnée.</div>
                    <div><span className='font-bold uppercase'>Frais d'inscription : </span> 10 000 FCFA</div>
                    <div className='uppercase'>Obtenez un : <span className='font-bold'>📸 Shooting,🛡️ Badge, 📃 Contrat.</span> </div>
                </div>

                <div className='text-xl flex flex-col pl-10 pr-20'>
                    <span className='font-bold text-white bg-pink-800 flex items-center w-full justify-center rounded py-3 mb-4'>MODELE PHOTOS</span>
                    Participez à des publicités TV , où sur les réseaux sociaux .
                    <div><span className='font-bold'>Type : </span> Contrat à temps partiel</div>
                    <div><span className='font-bold'>Info : </span>  Ce recrutement est direct, vous êtes automatiquement sélectionnée.</div>
                    <div><span className='font-bold uppercase'>Frais d'inscription : </span> 15 000 FCFA</div>
                    <div className='uppercase'>Obtenez un : <span className='font-bold'>📸 Shooting,🛡️ Badge, 📃 Contrat.</span> </div>
                </div>

            </div>
            <div className='px-10 my-5 '>
                <div className='bg-pink-800 rounded text-2xl text-white font-bold flex justify-center items-center py-3'>Formulaire d’inscription</div>
                <form>
                        <div className='flex flex-wrap  my-10'>
                            <div className='w-1/3 px-2 flex flex-col'>
                                <label className='mb-3'>E-mail :</label>
                                <input
                                    value={form?.email_address}
                                    onChange={(e: any) => {
                                        setForm({ ...form, email_address: e.target.value })
                                    }}
                                    className="border border-purple-400 rounded-lg w-full p-3" type="email" />

                            </div>
                            
                            <div className='w-1/3 px-2 flex flex-col'>
                                <label className='mb-3'>Nom :</label>
                                <input
                                    value={form?.last_name}
                                    onChange={(e: any) => {
                                        setForm({ ...form, last_name: e.target.value })
                                    }}
                                    className="border border-purple-400 rounded-lg w-full p-3" type="text" />
                            </div>
                            <div className='w-1/3 px-2  flex flex-col'>
                                <label className='mb-3'>Prénoms :</label>
                                <input
                                    value={form?.first_name}
                                    onChange={(e: any) => {
                                        setForm({ ...form, first_name: e.target.value })
                                    }}
                                    className="border border-purple-400 rounded-lg w-full p-3" type="text" />
                            </div>
                        </div>
                        <div className='flex  flex-wrap my-10'>
                            <div className='w-2/12 px-2 flex flex-col'>
                                <label className='mb-3'> Vous êtes :</label>
                                <select
                                    value={form?.gender}
                                    onChange={(e: any) => {
                                        setForm({ ...form, gender: e.target.value })
                                    }}
                                    className="border bg-transparent border-purple-400 rounded-lg w-full p-3">
                                    <option value="">Sélectionner</option>
                                    <option value="Homme">Homme</option>
                                    <option value="Femme">Femme</option>
                                    <option value="Enfant">Enfant</option>
                                </select>
                            </div>
                            <div className='w-1/12 px-2 flex flex-col'>
                                <label className='mb-3'>Age :</label>
                                <input
                                    value={form?.age}
                                    onChange={(e: any) => {
                                        setForm({ ...form, age: e.target.value })
                                    }}
                                    className="border border-purple-400 rounded-lg w-full p-3" type="number" />
                            </div>
                            
                            <div className='w-2/12 px-2 flex flex-col'>
                                <label className='mb-3'> Profil :</label>
                                <select
                                    value={form?.profil_id}
                                    onChange={(e: any) => {
                                        setForm({ ...form, profil_id: e.target.value })
                                    }}
                                    className="border border-purple-400 rounded-lg bg-transparent w-full p-3">
                                    <option value="">Sélectionner</option>
                                    <option value="1">Hôtesse 10.000 FCFA</option>
                                    <option value="2">Modèle photo 15.000 FCFA</option>
                                    <option value="3">Les 2- 21.500 FCFA</option>
                                </select>
                            </div>
                            <div className='w-2/12 px-2 flex flex-col'>
                                <label className='mb-3'>WhatsApp ? :</label>
                                <select
                                    value={form?.is_phone_whatsapp}
                                    onChange={(e: any) => {
                                        setForm({ ...form, is_phone_whatsapp: e.target.value })
                                    }}
                                    className="border border-purple-400 rounded-lg bg-transparent w-full p-3">
                                    <option value="">Sélectionner</option>
                                    <option value="1">oui</option>
                                    <option value="2">non</option>
                                </select>
                            </div>
                            <div className='w-3/12 px-2 flex flex-col'>
                                <label className='mb-3'>Contact: ( Ajouter indicatif -  ex: 225 )</label>
                                <input
                                    value={form?.phone}
                                    onChange={(e: any) => {
                                        setForm({ ...form, phone: e.target.value })
                                    }}
                                    className="border border-purple-400 rounded-lg w-full p-3" type="tel" />
                            </div>

                            <div className='w-2/12 px-2 flex flex-col'>
                                <label className='mb-3'>Commune:</label>
                                <select
                            value={form?.town}
                            onChange={(e: any) => {
                                setForm({ ...form, town: e.target.value })
                            }}
                            className="border bg-transparent border-purple-400 rounded-lg w-full p-3">
                            <option value="">Sélectionner</option>
                            <option value="Adjamé">Adjamé</option>
                            <option value="Abobo">Abobo</option>
                            <option value="Anyama">Anyama</option>
                            <option value="Attécoubé">Attécoubé</option>
                            <option value="Bingerville">Bingerville</option>
                            <option value="Cocody">Cocody</option>
                            <option value="Koumassi">Koumassi</option>
                            <option value="Macory">Macory</option>
                            <option value="Plataeu">Plataeu</option>
                            <option value="Port-Bouet">Port-Bouet</option>
                            <option value="Treichville">Treichville</option>
                            <option value="Macory">Macory</option>
                            <option value="Songon">Songon</option>
                            <option value="Yopougon">Yopougon</option>
                            <option value="Autres">Autres</option>
                        </select>
                            </div>
                        </div>

                    <div className='w-full flex  flex-wrap  my-10'>

                        <div className='w-2/12 px-2 flex flex-col'>
                            <label className='mb-3'>Taille (m) :</label>
                            <input
                                value={form?.size}
                                onChange={(e: any) => {
                                    setForm({ ...form, size: e.target.value })
                                }}
                                className="border border-purple-400 rounded-lg w-full p-3" type="text" />
                        </div>
                        <div className='w-2/12 px-2 flex flex-col'>
                            <label className='mb-3' > Teint :</label>
                            <select
                                value={form?.dyed}
                                onChange={(e: any) => {
                                    setForm({ ...form, dyed: e.target.value })
                                }}
                                className="border bg-transparent border-purple-400 rounded-lg rounded-lg w-full p-3">
                                <option value="">Sélectionner</option>
                                <option value="clair">Clair</option>
                                <option value="noir">Noir</option>
                                <option value="bronzé">Bronzé</option>
                                <option value="blanche">Blanche</option>
                            </select>
                        </div>
                        <div className='w-2/12 px-2 flex flex-col'>
                            <label className='mb-3'>Poids (kg) :</label>
                            <input
                                value={form?.weight}
                                onChange={(e: any) => {
                                    setForm({ ...form, weight: e.target.value })
                                }}
                                className="border border-purple-400 rounded-lg w-full p-3" type="text" />
                        </div>
                        <div className='w-2/12 px-2 flex flex-col'>
                            <label className='mb-3'>Pointure :</label>
                            <input
                                value={form?.shoe_size}
                                onChange={(e: any) => {
                                    setForm({ ...form, shoe_size: e.target.value })
                                }}
                                className="border border-purple-400 rounded-lg w-full p-3" type="text" />
                        </div>
                        <div className='w-2/12 px-2 flex flex-col'>
                            <label className='mb-3'>Couleur de cheveux :</label>
                            <input
                                value={form?.hair_color}
                                onChange={(e: any) => {
                                    setForm({ ...form, hair_color: e.target.value })
                                }}
                                className="border border-purple-400 rounded-lg w-full p-3" type="text" />
                        </div>
                        <div className='w-2/12 px-2 flex flex-col'>
                            <label className='mb-3' > Type de cheveux :</label>
                            <select
                                value={form?.hair_type}
                                onChange={(e: any) => {
                                    setForm({ ...form, hair_type: e.target.value })
                                }}
                                className="border bg-transparent border-purple-400 rounded-lg w-full p-3">
                                <option value="">Sélectionner</option>
                                <option value="Crépus">Crépus</option>
                                <option value="Metissé">Metissé</option>
                                <option value="Lisse">Lisse</option>
                                <option value="Bouclé">Bouclé</option>
                                <option value="Rasé">Rasé</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-full flex  flex-wrap  my-10'>
                        
                    <div className='w-2/12 px-2 flex flex-col'>
                            <label className='mb-3'>Couleur des yeux:</label>
                            <input
                                value={form?.eye_color}
                                onChange={(e: any) => {
                                    setForm({ ...form, eye_color: e.target.value })
                                }}
                                className="border  border-purple-400 rounded-lg w-full p-3" type="text" />
                        </div>
                        <div className='w-3/12 px-2 flex flex-col'>
                            <label className='mb-3'>Télécharger une 1ere photo :</label>
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
                                type="file" className=" w-full p-3" />

                            {
                                form?.profil_image && <img className='rounded-lg w-32 mt-5' src={form?.profil_image} alt="" />
                            }

                        </div>

                        <div className='w-3/12 px-2 flex flex-col'>
                            <label className='mb-3'>Télécharger une 2e photo :</label>
                            <input
                                onChange={(event: any) => {

                                    const reader = new FileReader();
                                    if (event.target.files && event.target.files.length) {
                                        const [file] = event.target.files;
                                        reader.readAsDataURL(file);
                                        reader.onload = async () => {
                                            setForm({ ...form, profil_image_2: reader.result })
                                        };
                                    }
                                }}
                                type="file" className=" w-full p-3" />

                            {
                                form?.profil_image_2 && <img className='rounded-lg w-32 mt-5' src={form?.profil_image_2} alt="" />
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
                                !form?.profil_image ||
                                !form?.profil_image_2
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
                                    form?.profil_image &&
                                    form?.profil_image_2
                                ) {
                                    validate() //function data base 
                                }

                            }} className='bg-pink-800 text-white text-lg font-semibold rounded w-32 h-10'> Envoyer</button>
                            

                    </div>

                </form>
            </div>

            <Footer2 />
            
            {loading && <div className="h-screen w-screen fixed top-0 bottom-0 bg-white/[.5] flex justify-center items-center">
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}

            />
            </div>}
        </>
    )
}

export default Register