import con from './connection.js'

export async function inserirTarefa(tarefa) {
    const comando = `
        INSERT INTO tb_tarefas (ds_tarefa, id_projeto)
            VALUES (?, ?)
    `

    let registros = await con.query(comando, [tarefa.descricao, tarefa.projeto])
    let info = registros[0]

    return info.insertId
}

export async function consultarTarefa() {
    const comando = `
        SELECT id_tarefa, 
                ds_tarefa
            FROM tb_tarefas
    `

    let registros = await con.query (comando)
    let info = registros[0]

    return info
}

export async function alterarTarefa(tarefa, id) {
    const comando = `
        UPDATE tb_tarefas
            SET ds_tarefa = ?
                id_projeto = ?
            WHERE id_tarefa = ?
    `

    let registros = await con.query (comando, [tarefa.descricao, tarefa.projeto, id])
    let info = registros[0]

    return info.affectedRows
}

export async function deletarTarefa(id) {
    const comando = `
        DELETE FROM tb_tarefas
            WHERE id_tarefa = ?
    `

    let registros = await con.query (comando, [id])
    let info = registros[0]

    return info.affectedRows
}