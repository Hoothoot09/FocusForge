// Na parte de cima da página de task terá contadores para indicar quantas tasks estão em andamento, quantas foram concluídas e quantas estão no lixo.
//
//Abaixo irá ter um container onde mostrarar a porcentagem de progresso das tasks em andamento, que foram concluidas e que foram jogadas no lixo.

// Ao lado direito desses containers té um gráfico onde sinalizarar a porcentagem das tasks com base na sua prioridade, ou seja, se a task é de alta prioridade, média prioridade ou baixa prioridade.

//Abaixo de todas essas informações terá uma tabela com todas as tasks, onde terá a opção de editar, excluir e concluir a task.

export default function TaskPage() {
  return (
    <section className="flex flex-col max-w-[1400px] m-2">
      <div className="flex items-center bg-[#171717] m-2 p-2 border border-primary rounded-md">
        <h2 className="text-md">Welcome back! user</h2>{" "}
        {/* Aqui terá o nome do usuário logado */}
      </div>

      <div className="grid grid-cols-2 grid-rows-1 h-full gap-7 p-2">
        <div className="grid grid-cols-2 grid-rows-2 w-[500px] h-[350px] gap-4">
          <div className="relative flex flex-col w-[250px] bg-[#171717] border border-primary p-2 gap-2 rounded-md">
            <div className="flex justify-between items-center">
              <p className="text-lg">Total Tasks </p>
              <button className="flex justify-center items-center border border-[#6B7280] p-1 size-10 rounded-full cursor-pointer hover:bg-[#6B728030]">
                <span className="absolute flex text-lg top-2.5">...</span>
              </button>
            </div>
            <span className="text-5xl font-bold">0</span>
            {/* Aplicar a lógica de contagem, por dia, semana, mês e ano */}
            <p className="text-sm">
              <span className="bg-[#6B7280] p-1 rounded-md">0%</span> increased
              from last week
            </p>
            {/* Aplicar a lógica de porcentagem, por semana, mês e ano */}
          </div>

          <div className="relative flex flex-col w-[250px] bg-[#171717] border border-primary p-2 gap-2 rounded-md">
            <div className="flex justify-between items-center">
              <p className="text-lg">Completed Tasks</p>
              <button className="flex justify-center items-center border border-[#6B7280] p-1 size-10 rounded-full cursor-pointer hover:bg-[#6B728030]">
                <span className="absolute flex text-lg top-2.5">...</span>
              </button>
            </div>
            <span className="text-5xl font-bold">0</span>
            {/* Aplicar a lógica de contagem, por dia, semana, mês e ano */}
            <p className="text-sm">
              <span className="bg-[#6B7280] p-1 rounded-md">0%</span> increased
              from last week
            </p>
            {/* Aplicar a lógica de porcentagem, por semana, mês e ano */}
          </div>

          <div className="relative flex flex-col w-[250px] bg-[#171717] border border-primary p-2 gap-2 rounded-md">
            <div className="flex justify-between items-center">
              <p className="text-lg">Pending Tasks</p>
              <button className="flex justify-center items-center border border-[#6B7280] p-1 size-10 rounded-full cursor-pointer hover:bg-[#6B728030]">
                <span className="absolute flex text-lg top-2.5">...</span>
              </button>
            </div>
            <span className="text-5xl font-bold">0</span>
            {/* Aplicar a lógica de contagem, por dia, semana, mês e ano */}
            <p className="text-sm">
              <span className="bg-[#6B7280] p-1 rounded-md">0%</span> increased
              from last week
            </p>
            {/* Aplicar a lógica de porcentagem, por semana, mês e ano */}
          </div>

          <div className="relative flex flex-col w-[250px] bg-[#171717] border border-primary p-2 gap-2 rounded-md">
            <div className="flex justify-between items-center">
              <p className="text-lg">Overdue Tasks</p>
              <button className="flex justify-center items-center border border-[#6B7280] p-1 size-10 rounded-full cursor-pointer hover:bg-[#6B728030]">
                <span className="absolute flex text-lg top-2.5">...</span>
              </button>
            </div>
            <span className="text-5xl font-bold">0</span>
            {/* Aplicar a lógica de contagem, por dia, semana, mês e ano */}
            <p className="text-sm">
              <span className="bg-[#6B7280] p-1 rounded-md">0%</span> increased
              from last week
            </p>
            {/* Aplicar a lógica de porcentagem, por semana, mês e ano */}
          </div>
        </div>

        <div className="relative flex flex-col bg-[#171717] p-2 rounded-md border border-primary">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold">Task Priority</h3>
            <button className="flex justify-center items-center border border-[#6B7280] p-1 size-10 rounded-full cursor-pointer hover:bg-[#6B728030]">
              <span className="absolute flex text-lg top-2.5">...</span>
            </button>
          </div>

          <div className="flex justify-center items-end h-full gap-2.5">
            <span></span> {/* layout d0 gráfico em barra */}
            <span className="text-sm">Jan</span>
            <span></span> {/* layout d0 gráfico em barra */}
            <span className="text-sm">Feb</span>
            <span></span> {/* layout d0 gráfico em barra */}
            <span className="text-sm">Mar</span>
            <span></span> {/* layout d0 gráfico em barra */}
            <span className="text-sm">May</span>
            <span></span> {/* layout d0 gráfico em barra */}
            <span className="text-sm">Jun</span>
            <span></span> {/* layout d0 gráfico em barra */}
            <span className="text-sm">Jul</span>
            <span></span> {/* layout d0 gráfico em barra */}
            <span className="text-sm">Aug</span>
            <span></span> {/* layout d0 gráfico em barra */}
            <span className="text-sm">Sep</span>
            <span></span> {/* layout d0 gráfico em barra */}
            <span className="text-sm">Oct</span>
            <span></span> {/* layout d0 gráfico em barra */}
            <span className="text-sm">Nov</span>
            <span></span> {/* layout d0 gráfico em barra */}
            <span className="text-sm">Dec</span>
          </div>
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
