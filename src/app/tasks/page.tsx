// Na parte de cima da página de task terá contadores para indicar quantas tasks estão em andamento, quantas foram concluídas e quantas estão no lixo.
//
//Abaixo irá ter um container onde mostrarar a porcentagem de progresso das tasks em andamento, que foram concluidas e que foram jogadas no lixo.

// Ao lado direito desses containers té um gráfico onde sinalizarar a porcentagem das tasks com base na sua prioridade, ou seja, se a task é de alta prioridade, média prioridade ou baixa prioridade.

//Abaixo de todas essas informações terá uma tabela com todas as tasks, onde terá a opção de editar, excluir e concluir a task.

export default function TaskPage() {
  return (
    <section>
      <div>
        <div>
          <h2>Welcome back! user</h2> {/* Aqui terá o nome do usuário logado */}
        </div>

        <div>
          <div>
            <div>
              <p>Total Tasks </p>
              <button>...</button>
            </div>
            <span>0</span>
            {/* Aplicar a lógica de contagem, por dia, semana, mês e ano */}
            <p>
              <span>0%</span> increased from last week
            </p>
            {/* Aplicar a lógica de porcentagem, por semana, mês e ano */}
          </div>

          <div>
            <div>
              <div>
                <p>Completed Tasks</p>
                <button>...</button>
              </div>
              <span>0</span>
              {/* Aplicar a lógica de contagem, por dia, semana, mês e ano */}
              <p>
                <span>0%</span> increased from last week
              </p>
              {/* Aplicar a lógica de porcentagem, por semana, mês e ano */}
            </div>
          </div>

          <div>
            <div>
              <div>
                <p>Pending Tasks</p>
                <button>...</button>
              </div>
              <span>0</span>
              {/* Aplicar a lógica de contagem, por dia, semana, mês e ano */}
              <p>
                <span>0%</span> increased from last week
              </p>
              {/* Aplicar a lógica de porcentagem, por semana, mês e ano */}
            </div>
          </div>

          <div>
            <div>
              <div>
                <p>Overdue Tasks</p>
                <button>...</button>
              </div>
              <span>0</span>
              {/* Aplicar a lógica de contagem, por dia, semana, mês e ano */}
              <p>
                <span>0%</span> increased from last week
              </p>
              {/* Aplicar a lógica de porcentagem, por semana, mês e ano */}
            </div>
          </div>

          <div>
            <h3>Task Distribution</h3>

            <div>
              <span></span> {/* layout da porcentagem */}
              <span></span> {/* layout da porcentagem */}
              <p>In Progress</p>
              <span>0%</span>
              <span></span> {/* layout de barra */}
            </div>

            <div>
              <span></span> {/* layout da porcentagem */}
              <span></span> {/* layout da porcentagem */}
              <p>completed</p>
              <span>0%</span>
              <span></span> {/* layout de barra */}
            </div>

            <div>
              <span></span> {/* layout da porcentagem */}
              <span></span> {/* layout da porcentagem */}
              <p>Overdue</p>
              <span>0%</span>
              <span></span> {/* layout de barra */}
            </div>
          </div>
        </div>

        <div>
          <div>
            <h3>Task Priority</h3>
            <button>...</button>

            <div>
              <span></span> {/* layout d0 gráfico em barra */}
              <span>Jan</span>
              <span></span> {/* layout d0 gráfico em barra */}
              <span>Feb</span>
              <span></span> {/* layout d0 gráfico em barra */}
              <span>Mar</span>
              <span></span> {/* layout d0 gráfico em barra */}
              <span>May</span>
              <span></span> {/* layout d0 gráfico em barra */}
              <span>Jun</span>
              <span></span> {/* layout d0 gráfico em barra */}
              <span>Jul</span>
              <span></span> {/* layout d0 gráfico em barra */}
              <span>Aug</span>
              <span></span> {/* layout d0 gráfico em barra */}
              <span>Sep</span>
              <span></span> {/* layout d0 gráfico em barra */}
              <span>Oct</span>
              <span></span> {/* layout d0 gráfico em barra */}
              <span>Nov</span>
              <span></span> {/* layout d0 gráfico em barra */}
              <span>Dec</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h3>Task List</h3>
          <input type="search" placeholder="Search for tasks..." />
          <button>All time</button>
          <button>Week</button>
          <button>Month</button>
          <button>Year</button>
        </div>

        <div>
          <h4>Task name</h4>
          <h4>Date</h4>
          <h4>Due Date</h4>
          <h4>Status</h4>
        </div>

        <div>
          <button>Add task</button>
        </div>
      </div>
    </section>
  );
}
