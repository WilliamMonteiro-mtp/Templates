# Preencher no fim

Editar **só** `conteudo/dados.md`. Modelo vazio: `dados.modelo.md`. Sem lorem.

| Área | Campos em `dados.md` | UI se `vazio` |
|------|----------------------|----------------|
| Foto | `photo.src` | PortraitSlot + `initials` |
| Disponibilidade | `availability.status` | chip TBD |
| Email / local | `email`, `location.*` | (já preenchidos nesta pessoa) |
| Telefone | `phone.visible` | linha «A adicionar» se `false` |
| WhatsApp / redes | `whatsapp`, `social.*` | slot / ícone desactivado |
| CV | `cv.src` | botão desactivado |
| Lacuna | `careerGap.show` | sem linha se `false` |
| Projetos | secção 12 | ProjectEmpty |
| Extra skills | `skills.showExtra` | ocultar grupo extra se `false` |

Foto: ficheiro em `photo.fileHint`, depois `photo.src` = `/media/portrait.webp`.  
CV: PDF sanitizado em `cv.fileHint`, depois `cv.src` = `/cv/cv.pdf`.
