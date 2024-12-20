import React, { useState } from 'react';
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/Select";
import { X } from 'lucide-react';

function SearchPanel({ isOpen, onClose }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [press, setPress] = useState('all');
  const [category, setCategory] = useState('all');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchType, setSearchType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 5;

  const searchResults = [
    {
      id: '1',
      title: '뉴스 제목 1',
      press: '경제일보',
      category: '경제',
      date: '2024-03-01',
      content: '이것은 뉴스 1의 내용입니다. 실제 구현 시 API에서 기사 내용을 가져와야 합니다. 이 내용은 매우 길 수 있으며, 여러 단락으로 구성될 수 있습니다. 뉴스의 전체 내용을 포함해야 합니다.',
      views: 1200,
      comments: 15
    },
    {
      id: '2',
      title: '뉴스 제목 2',
      press: '대일리뉴스',
      category: '정치',
      date: '2024-03-02',
      content: '이것은 뉴스 2의 내용입니다. 정치 관련 뉴스의 내용이 여기에 들어갑니다. 다양한 정치적 이슈와 관련된 상세한 정보가 포함될 수 있습니다.',
      views: 980,
      comments: 23
    },
    {
      id: '3',
      title: '뉴스 제목 3',
      press: '경제일보',
      category: '사회',
      date: '2024-03-03',
      content: '이것은 뉴스 3의 내용입니다. 사회 문제나 현상에 대한 심층적인 분석과 보도가 이 부분에 포함됩니다. 다양한 사회적 이슈에 대한 정보를 제공합니다.',
      views: 1500,
      comments: 8
    }
  ];

  const pageCount = Math.ceil(searchResults.length / itemsPerPage);
  const currentResults = searchResults.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleReset = () => {
    setPress('all');
    setCategory('all');
    setStartDate('');
    setEndDate('');
    setSearchType('all');
    setSearchTerm('');
    setSelectedArticle(null);
    setCurrentPage(1);
  };

  const toggleArticle = (article) => {
    setSelectedArticle(prevSelected => 
      prevSelected && prevSelected.id === article.id ? null : article
    );
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-lg w-[1000px] max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">뉴스 검색</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex-grow overflow-hidden">
          <div className="h-full flex flex-col p-6">
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm mb-1">언론사</label>
                <Select value={press} onValueChange={setPress}>
                  <SelectTrigger>
                    <SelectValue placeholder="언론사 선택" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="all">전체</SelectItem>
                    <SelectItem value="economic">경제일보</SelectItem>
                    <SelectItem value="daily">대일리뉴스</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm mb-1">카테고리</label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="카테고리 선택" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="all">전체</SelectItem>
                    <SelectItem value="politics">정치</SelectItem>
                    <SelectItem value="economy">경제</SelectItem>
                    <SelectItem value="society">사회</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm mb-1">시작일</label>
                <Input 
                  type="date" 
                  className="w-full" 
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm mb-1">종료일</label>
                <Input 
                  type="date" 
                  className="w-full" 
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-4 mb-4">
              <Select value={searchType} onValueChange={setSearchType}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="검색 조건" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="title">제목</SelectItem>
                  <SelectItem value="content">내용</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex-1 flex gap-2">
                <Input 
                  placeholder="검색어를 입력하세요" 
                  className="flex-1"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button className="bg-black hover:bg-gray-800 text-white px-8">
                  검색
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleReset}
                >
                  초기화
                </Button>
              </div>
            </div>

            <div className={`flex gap-6 flex-grow overflow-hidden transition-all duration-300 ${selectedArticle ? 'w-full' : ''}`}>
              <div className={`flex flex-col transition-all duration-300 ${selectedArticle ? 'w-1/2' : 'w-full'}`}>
                <h3 className="font-medium mb-2">검색 결과</h3>
                <div className="flex-grow overflow-y-auto pr-4">
                  <div className="space-y-4">
                    {currentResults.map((result) => (
                      <div
                        key={result.id}
                        className={`p-3 border rounded-lg cursor-pointer hover:border-primary ${
                          selectedArticle?.id === result.id ? 'border-primary' : ''
                        }`}
                        onClick={() => toggleArticle(result)}
                      >
                        <h4 className="font-medium mb-1">{result.title}</h4>
                        <div className="text-xs text-muted-foreground">
                          {result.press} • {result.category} • {result.date} • 조회수: {result.views} • 댓글: {result.comments}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => setCurrentPage(1)} 
                      disabled={currentPage === 1}
                    >
                      «
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                      disabled={currentPage === 1}
                    >
                      ‹
                    </Button>
                    {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    ))}
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))} 
                      disabled={currentPage === pageCount}
                    >
                      ›
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => setCurrentPage(pageCount)} 
                      disabled={currentPage === pageCount}
                    >
                      »
                    </Button>
                  </div>
                </div>
              </div>
              
              {selectedArticle && (
                <div className="w-1/2 flex flex-col pl-4 border-l">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">뉴스 상세</h3>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setSelectedArticle(null)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex-grow overflow-y-auto">
                    <div>
                      <h3 className="text-lg font-medium mb-2">{selectedArticle.title}</h3>
                      <div className="text-sm text-muted-foreground mb-2">
                        {selectedArticle.press} • {selectedArticle.category} • {selectedArticle.date}
                      </div>
                      <p className="text-sm mb-4">{selectedArticle.content}</p>
                      <Button className="w-full bg-black hover:bg-gray-800 text-white">
                        상세 페이지로 가기
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPanel;