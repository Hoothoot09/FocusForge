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

      <div className="flex flex-col bg-[#171717] p-2 rounded-md border border-primary m-2">
        <div className="relative flex justify-between items-center">
          <p className="text-lg">Task Distribution</p>
          <button className="flex justify-center items-center border border-[#6B7280] p-1 size-10 rounded-full cursor-pointer hover:bg-[#6B728030]">
            <span className="absolute flex text-lg top-0.5">...</span>
          </button>
        </div>

        <div className="relative flex justify-center items-end gap-10 mt-4">
          <div className="w-[300px] flex flex-col gap-2">
            <span className="absolute top-1.5 left-2 w-3 h-3 bg-[#3B82F6] rounded-md"></span>
            <span className="absolute top-3 left-3 w-1 h-25 bg-[#3B82F6] rounded-md"></span>
            <p className="text-md ml-3">In Progress</p>
            <span className="text-2xl ml-3">0%</span>
            <div className="w-full h-10 bg-[#3B82F680] rounded-r-md"></div>
          </div>

          <div className="w-[300px] flex flex-col gap-2">
            <span className="absolute top-1.5 left-87 w-3 h-3 bg-[#168A55] rounded-md"></span>
            <span className="absolute top-3 left-88 w-1 h-25 bg-[#168A55] rounded-md"></span>
            <p className="text-md ml-3">Completed</p>
            <span className="text-2xl ml-3">0%</span>
            <div className="w-full h-10 bg-[#168A5580] rounded-r-md"></div>
          </div>

          <div className="w-[300px] flex flex-col gap-2">
            <span className="absolute top-1.5 left-172 w-3 h-3 bg-[#B91C1C] rounded-md"></span>
            <span className="absolute top-3  left-173 w-1 h-25 bg-[#B91C1C] rounded-md"></span>
            <p className="text-md ml-3">Overdue</p>
            <span className="text-2xl ml-3">0%</span>
            <div className="w-full h-10 bg-[#B91C1C80] rounded-r-md"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#171717] p-2 rounded-md border border-primary m-2">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg">Task List</h3>
          <input
            className="bg-[#171717] w-[700px] border border-[#6B7280] p-1 placeholder:text-[#6B7280] focus:outline-none rounded-md"
            type="search"
            placeholder="Search for tasks..."
          />
          <button className="text-sm text-center bg-[#171717] border border-[#6B7280] p-1 rounded-md hover:bg-[#6B728030] cursor-pointer">
            All time <span></span> {/* Aqui terá um ícone de seta para baixo */}
          </button>
        </div>

        <div className="grid grid-cols-4 grid-rows-1 justify-center border border-[#6B7280] mb-2 rounded-md">
          <h4 className="text-center font-bold">Task name</h4>
          <h4 className="text-center font-bold">Date</h4>
          <h4 className="text-center font-bold">Due Date</h4>
          <h4 className="text-center font-bold">Status</h4>
        </div>

        <div className="flex justify-center items-center h-[200px] border border-[#6B7280] rounded-md">
          <button className="flex items-center text-sm text-center bg-[#171717] border border-[#6B7280] p-2 rounded-md hover:bg-[#6B728030] cursor-pointer">
            Add task
          </button>
        </div>
      </div>
    </section>
  );
}
