# BienesRaices_Ti_230045
Proyecto Integrador de l asignatura de Aplicciones web Orientada a servicios (AWOS), en la que dado que el codigo 
avanzado del proyecto de bienes Raices, el estudinte debera cumplir con la realizcion de los cambios sobre el codigo 
base de proyecto
 
 .mt-8.mx-auto.max-w-md 
            .bg-white.py-8.px-4.shadow
                form.space-y-5( method="POST" action="/auth/login") 
                    input(type="hidden" name="_csrf" value= csrfToken)
                    div 
                        label.block.text-sm.uppercase.text-gray-500.mb-3.font-bold(for="email") Email
                        input#email.w-full.px-3.py-2.border.border-gray-300.rounded-md.placeholder-gray-400(placeholder="Escribe tu email" type="email" name="email") 
                    div 
                        label.block.text-sm.uppercase.text-gray-500.mb-3.font-bold(for="password") Password
                        input#password.w-full.px-3.py-2.border.border-gray-300.rounded-md.placeholder-gray-400(placeholder="Escribe tu password" type="password" name="password")             
                    div.flex.items-center.justify-between 
                        a.text-gray-500.text-xs(href="/auth/registro") ¿No tienes cuenta? Crea una
                        a.text-gray-500.text-xs(href="/auth/olvide-password") Olvide mi Password

                    input(class="w-full bg-mati4-600 hover:bg-mati4-700 text-white font-bold py-3 cursor-pointer" type="submit" value="Inicar Sesión")    
